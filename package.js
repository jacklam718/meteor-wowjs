Package.describe({
  summary: 'WOW.js - Reveal CSS animation as you scroll down a page',
  version: '0.0.1',
  git: 'https://github.com/jacklam718/meteor-wowojs'
});

Package.on_use(function(api) {
  api.add_files(['WOW/dist/wow.js', 'WOW/css/libs/animate.css'], 'client');
});
