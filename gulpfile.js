'use strict';
const path = require('path');
//const gulp = require('gulp');

const gulp = require('gulp-help')(require('gulp'));

const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');
const importOnce = require('node-sass-import-once');


const sassOptions = {
  importer: importOnce,
  importOnce: {
    index: true,
    bower: true
  }
};


const config = {
  dest: './dist',
  scripts: {
    src: [
      'src/**/*.js',
      '!src/**/*.test.js'
    ]
  },
  styles: {
    dest: './dist/css',
    src: [
      'src/sass/index.scss',
      'src/**/*.scss'
    ]
  }
};

gulp.task('sassdoc', function() {

  const sassdocOptions = {
    dest: 'sass-docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true
    },
    groups: {
      'undefined': 'Ungrouped'
    }
  };
  return gulp.src(config.styles.src).pipe($.sassdoc(sassdocOptions));
});

gulp.task('clean', function() {
  return gulp.src(['.tmp', config.styles.dest], {
    read: false
  }).pipe($.clean());
});

gulp.task('sass', 'Compile all .sass/.scss files', function() {
  return gulp.src(config.styles.src)
    .pipe($.filelog())
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    //.pipe($.rename(pkg.name + '.css'))
    .pipe($.filelog())
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('autoprefixer', function() {
  return gulp.src(`${config.styles.dest}/**/*.css`)
    .pipe($.filelog())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.rename({
      //suffix: '.prefixed'
    }))
    .pipe($.size())
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('cssmin', 'Take all css and min with source maps', function() {
  return gulp.src([
    `${config.styles.dest}/**/*.css`,
    `./dist/${pkg.name}.css`
  ])
    .pipe($.filelog())
    //.pipe($.sourcemaps.init())
    .pipe($.cssmin({
       format: 'beautify'
    }))
    //.pipe($.sourcemaps.write('.'))
    .pipe($.rename({
    //  suffix: '.min'
    }))
    .pipe($.size())
    .pipe(gulp.dest('./dist'))
    ;
});

gulp.task('postcss', 'Run files throught postcss', ['sass'], function () {
    const postcss    = require('gulp-postcss');
    const sourcemaps = require('gulp-sourcemaps');

    return gulp.src([
      `${config.styles.dest}/**/*.css`,
      `./dist/${pkg.name}.css`
    ])
    .pipe( sourcemaps.init() )
    .pipe( postcss({
      cssnext: true
    }) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/css') );
});


gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('autoprefixer:watch', function() {
  gulp.watch('./css/**/*.css', ['autoprefixer']);
});






const eslint = require('gulp-eslint');

gulp.task('lint', 'Lint all source scripts', () => {
  return gulp.src(['./src/**/*.js','!node_modules/**'])
      .pipe($.filelog())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

const gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
gulp.task('webpack',  'Run webpack build', () => {
  return gulp.src('src/index.js')
    .pipe(gulpWebpack({
      config : require('./webpack.config.js')('dist')
    }, webpack))
    .pipe($.size())
    .pipe(gulp.dest('dist/'));
});

const babel = require('gulp-babel');
gulp.task('dist', 'Run scripts through babel', () =>
  gulp.src(config.scripts.src)
    .pipe($.filelog())
    .pipe(babel({
      comments: false,
      extends: path.resolve(__dirname, '.babelrc')
    }))
    .pipe($.size())
    .pipe(gulp.dest('dist/es6'))
);

gulp.task('watch', ['sass:watch', 'autoprefixer:watch']);
gulp.task('styles', gulpSequence('clean', 'sass', 'autoprefixer', 'cssmin'));
gulp.task('default', gulpSequence('clean', 'sass', 'autoprefixer', 'cssmin'));
