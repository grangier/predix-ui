/**
 going to copy all icons from src/px-icon-set/icons/src-{name} to
 {name}-{icon}.svg
*/
const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const SVGO = require('svgo');
const svgo = new SVGO({
  full: true,
  multipass: true,
  js2svg: {
    pretty: true,
    indent: '  '
  },
  plugins: [
    {cleanupAttrs: true},
    {removeEditorsNSData: true},
    {removeEmptyAttrs: true},
    {removeEmptyContainers: true},
    {cleanUpEnableBackground: true},
    {convertStyleToAttrs: true},
    {convertPathData: true},
    {convertTransform: true},
    {removeUnknownsAndDefaults: true},
    {removeNonInheritableGroupAttrs: true},
    {removeUselessStrokeAndFill: true},
    {removeUnusedNS: true},
    {cleanupNumericValues: true},
    {mergePaths: true},
    {convertShapeToPath: true},
    {transformsWithOnePath: false},
    {removeAttrs: {attrs: '(class|stroke|fill)'}}
  ]
});


const SRC_DIR = path.resolve(__dirname, '../src/px-icon-set/icons');
const DEST_DIR = path.resolve(__dirname, '../temp/icons');

const sizeRegEx = /(\w\d+x\d*)/g
const iconsetNames = {
  'com': 'communication',
  'doc': 'document',
  'fea': 'feature',
  'nav': 'navigation',
  'obj': 'object',
  'utl': 'utility',
  'vis': 'vis'
};

/*
* Gives us the index at the end of a search term
*/
function findIndex(searchTerm, src) {
  const i = String(src).indexOf(searchTerm);
  return i + searchTerm.length;
};
function optimize(string) {
  return new Promise(resolve => {
    svgo.optimize(string, result => {
      return resolve(result.data);
    });
  });
};

function write(path, string) {
  return new Promise(resolve => {
    fs.writeFile(path, string, 'utf8', err => {
      if (err) throw err;
      return resolve(path);
    });
  });
};
function read(path) {
  return new Promise(resolve => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;
      return resolve(data);
    });
  });
};

function getIconNames(src) {
  const re = /<g\s?id="([^"]+)/g;
  let names = [];
  let n;

  while(n = re.exec(src)) {
    names.push(n[1])
  }
  return names;
};


function cleanForOutfile(string, name) {
  // We assume that they all have a title filed and our content starts after it...
  // FIXME This might not be a safe assumption. Probably a regex or something would be safer
  const ending = '</title>';
  const index = findIndex(ending,string);

  //Fix our name, get rid of .svg, 32x32, and replace _ with -
  // FIXME .slice(0,-6) might need to get smarter to only slice if the 16x16 is there
  //const n = name.split('.')[0].slice(0,-6).split('_').join('-').split(' ').join('-');
  const n = name.replace('.svg', '');
  const g = `<g id="${n}">`;

  // get our real content
  // we manually remove ids here; we do this because of the note above in the svgo settings
  const s = string.slice(index).replace('</svg>','</g>').replace(/\sid="\w+"/, '').split('\n').filter(s=>s.length).map(s=>s.trim()).join('');

  return g + s;
};



function cleanName(ns, file){
  let ext = path.extname(file);
  let basename = path.basename(file).replace(sizeRegEx, '').replace('_', '-');
  let newName = `px-${ns}-${basename}`;
  let newFilename = path.resolve(DEST_DIR, newName);

  return {
    file: file,
    newFilename: newFilename,
    basename: path.basename(newFilename),
    parsed: path.parse(newFilename)
  }
}

function globFiles(pattern){
  return new Promise((resolve, reject) =>{
    glob(pattern, (err, files) => {
      if(err){
        reject(err);
      }
      resolve(files);
    });
  });
}

/**
 * renameIcons - Rename all icons by cleaning filename and writing to dest
 */
function renameIcons(ns){
  console.log('renameIcons', ns);
  let jsIcons = `
    //${ns} icons
    const ${ns} = {
  `;
  let allIcons = `<svg><defs>`;
  let outputname = `${DEST_DIR}/${ns}_all.svg`;
  let dirPattern = `${SRC_DIR}/src-${ns}/*.svg`;
  let out = [];
  fs.ensureDirSync(DEST_DIR);
  return new Promise((resolve, reject) =>{
    globFiles(dirPattern).then((files) => {
      let _done = _.after(files.length, () =>{
        allIcons += `
          </defs>
          </svg>
        `

        jsIcons += `};
        //done
        export default ${ns}`;
        fs.writeFileSync(outputname, allIcons, 'utf8');
        fs.writeFileSync(outputname.replace('.svg', '.js'), jsIcons, 'utf8');
        out.push(outputname);
        resolve(out);
      });

      _.forEach(files, (file) => {
        let cleanFile = cleanName(ns, file);
        console.log('\n=>', cleanFile.newFilename);

        //dirty
        let rawSvg = fs.readFileSync(file ,'utf8');
        console.log('dirty - svg =>', rawSvg);



        optimize(rawSvg).then((res) =>{

          //clean
          let svg = cleanForOutfile( res, cleanFile.basename );

          jsIcons += `'${cleanFile.basename.replace('.svg', '')}': '${svg}',
          `;


          allIcons += `\n${svg}`;
          console.log('clean - svg =>', svg);
          console.log('optimized', res);

          write(cleanFile.newFilename, res).then(_done);
        });


      });
    }).catch(reject);
  });
}

function optimizeAll(files){
  let p = [];
  for (var i = 0; i < files.length; i++) {
    p.push(optimize(files[i]));
  }
  return Promise.all(p);
}



const iconSets = Object.keys(iconsetNames);
const names = [];
iconSets.forEach(icons => {
  renameIcons(icons).then((files) =>{
    names.push(files);
  }).then(()=>{
    console.log('optimize', names);
  });
});




glob(`${DEST_DIR}/*_all.svg`, (err, files) =>{
  console.log(files);
//  optimizeAll(files);
});
