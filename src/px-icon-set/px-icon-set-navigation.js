
    //nav icons
    const nav = {
  'px-nav-back': '<g id="px-nav-back"><path stroke-linejoin="round" d="M7 5l-5.5 5.5L7 16m-5-5.5h20"/></g>',
          'px-nav-close': '<g id="px-nav-close"><path stroke-miterlimit="10" d="M3 19L19 3M3 3l16 16"/></g>',
          'px-nav-collapse': '<g id="px-nav-collapse"><path stroke-linejoin="round" d="M22 20.5H1m6.5-8l4 4 4-4m-4 3.5V5"/><path d="M1.5 17.5v-15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15" stroke-linejoin="round"/></g>',
          'px-nav-confirmed': '<g id="px-nav-confirmed"><circle cx="11" cy="11" r="10.5" stroke-linejoin="round"/><path stroke-linejoin="round" d="M5.8 10.9l3.6 3.6 7.1-7.1"/></g>',
          'px-nav-down': '<g id="px-nav-down"><path d="M6 15.5l5.5 5.5 5.5-5.5m-5.5 5V.5"/></g>',
          'px-nav-expand': '<g id="px-nav-expand"><path stroke-linejoin="round" d="M22 20.5H1m14.5-11l-4-4-4 4m4-3.5v11"/><path d="M1.5 17.5v-15a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15" stroke-linejoin="round"/></g>',
          'px-nav-favorite': '<g id="px-nav-favorite"><path stroke-linejoin="round" d="M11 1.5l2.27 7h7.37l-5.96 4.33 2.27 7L11 15.5l-5.96 4.33 2.28-7L1.36 8.5h7.37l2.27-7z"/></g>',
          'px-nav-generic-user': '<g id="px-nav-generic-user"><path stroke-linejoin="round" d="M16.17 12l4.33 3v6.5h-19V15l4.33-3"/><rect x="6.5" y=".5" width="9" height="11" rx="4.5" ry="4.5" stroke-linejoin="round"/></g>',
          'px-nav-grid-view': '<g id="px-nav-grid-view"><path stroke-linejoin="round" d="M1.5 1.5h8v8h-8zm11 0h8v8h-8zm-11 11h8v8h-8zm11 0h8v8h-8z"/></g>',
          'px-nav-hamburger': '<g id="px-nav-hamburger"><path stroke-miterlimit="10" d="M0 4.5h22m-22 6h22m-22 6h22"/></g>',
          'px-nav-hierarchy': '<g id="px-nav-hierarchy"><rect x="7.5" y=".5" width="6" height="6" rx="3" ry="3" stroke-linejoin="round"/><path stroke-linejoin="round" d="M10.5 11V6.5m-9 10h6v5h-6zm12 0h6v5h-6zm-9 0v-5h12v5"/></g>',
          'px-nav-home': '<g id="px-nav-home"><path stroke-linejoin="round" d="M3.5 11v10.5h15V11m-18-.5L11 1l10.5 9.5"/><path stroke-linejoin="round" d="M8.5 15.5h5v6h-5z"/></g>',
          'px-nav-inbox-view': '<g id="px-nav-inbox-view"><path stroke-linejoin="round" d="M.5 3.5h7v15h-7zm7 0h14v15h-14z"/><path stroke-linejoin="round" d="M.5 8.5h7v5h-7z"/></g>',
          'px-nav-instance': '<g id="px-nav-instance"><path stroke-linejoin="round" d="M12.5 17.16v-7.15l-6-3.58-6 3.58v7.15l6 3.58 6-3.58z"/><path stroke-linejoin="round" d="M14.5 15.35l2-1.19V7.01l-6-3.58-2.56 1.53"/><path stroke-linejoin="round" d="M18.5 12.35l2-1.19V4.01l-6-3.58-2.56 1.53M4.5 12.5l2-1v5"/></g>',
          'px-nav-list-view': '<g id="px-nav-list-view"><path stroke-linejoin="round" d="M.5 2.5h4v4h-4zm6.5 2h15M.5 9.5h4v4h-4zm6.5 2h15m-21.5 5h4v4h-4zm6.5 2h15"/></g>',
          'px-nav-log-out': '<g id="px-nav-log-out"><path d="M14.36 4.37a9 9 0 1 1-7.71 0M10.5 0v12" stroke-miterlimit="10"/></g>',
          'px-nav-menu': '<g id="px-nav-menu"><circle cx="11" cy="3" r="2.5" stroke-miterlimit="10"/><circle cx="11" cy="11" r="2.5" stroke-miterlimit="10"/><circle cx="11" cy="19" r="2.5" stroke-miterlimit="10"/></g>',
          'px-nav-more': '<g id="px-nav-more"><circle cx="3" cy="11" r="2.5" stroke-miterlimit="10"/><circle cx="11" cy="11" r="2.5" stroke-miterlimit="10"/><circle cx="19" cy="11" r="2.5" stroke-miterlimit="10"/></g>',
          'px-nav-new-window': '<g id="px-nav-new-window"><path d="M16.5 11.16v9.34a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h9.34m-2.34 8L21 1m-8-.5h8.5V9" stroke-linejoin="round"/></g>',
          'px-nav-next': '<g id="px-nav-next"><path stroke-linejoin="round" d="M15 16l5.5-5.5L15 5m5 5.5H1"/></g>',
          'px-nav-notification': '<g id="px-nav-notification"><path d="M.5 16.5a3 3 0 0 0 3-3v-3.19A7.86 7.86 0 0 1 8.5 3a2.5 2.5 0 0 1 5 0 7.86 7.86 0 0 1 5 7.36v3.14a3 3 0 0 0 3 3" stroke-linejoin="round"/><path d="M7.5 18a3.5 3.5 0 0 0 7 0M0 16.5h22" stroke-miterlimit="10"/></g>',
          'px-nav-open-context': '<g id="px-nav-open-context"><path stroke-linejoin="round" d="M7 15l8.17-8.17M9.94 6.5h5.56v5.56"/><circle cx="11" cy="11" r="10.5" stroke-linejoin="round"/></g>',
          'px-nav-pause': '<g id="px-nav-pause"><path stroke-linejoin="round" d="M4.5 3.5h4v15h-4zm9 0h4v15h-4z"/></g>',
          'px-nav-play': '<g id="px-nav-play"><path stroke-linejoin="round" d="M8.5 15.84V6.16L16 11l-7.5 4.84z"/><circle cx="11" cy="11" r="10.5" stroke-linejoin="round"/></g>',
          'px-nav-reload': '<g id="px-nav-reload"><path stroke-linejoin="round" d="M15 6.5h5.5V1M.5 11a10.5 10.5 0 0 1 19.82-4.84M7 15.5H1.5V21m20-10a10.5 10.5 0 0 1-19.82 4.84"/></g>',
          'px-nav-search': '<g id="px-nav-search"><circle cx="8.5" cy="8.5" r="8" stroke-miterlimit="10"/><path stroke-miterlimit="10" d="M21 21l-6.84-6.84"/></g>',
          'px-nav-stop': '<g id="px-nav-stop"><path stroke-linejoin="round" d="M4.5 4.5h13v13h-13z"/></g>',
          'px-nav-tile-view': '<g id="px-nav-tile-view"><path stroke-linejoin="round" d="M.5 4.5h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5zm-16 8h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5z"/></g>',
          'px-nav-tree': '<g id="px-nav-tree"><path stroke-linejoin="round" d="M.5 1.5h4v4h-4z"/><rect x="3.5" y="8.5" width="4" height="4" rx="1" ry="1" stroke-linejoin="round"/><rect x="3.5" y="15.5" width="4" height="4" rx="1" ry="1" stroke-linejoin="round"/><path stroke-linejoin="round" d="M6 3.5h13m-10 7h13m-13 7h13"/></g>',
          'px-nav-unconfirmed': '<g id="px-nav-unconfirmed"><circle cx="11" cy="11" r="10" stroke-linejoin="round"/></g>',
          'px-nav-up': '<g id="px-nav-up"><path stroke-linejoin="round" d="M16.14 6.5L10.64 1l-5.5 5.5m5.5-5v20"/></g>'
          };
        //done
        export default nav
