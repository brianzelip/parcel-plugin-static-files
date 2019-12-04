'use strict';

module.exports = function(bundler) {
  bundler.on('bundled', bundle => {
    console.log('here comes the bundle!\n\n', bundle);
  });
};
