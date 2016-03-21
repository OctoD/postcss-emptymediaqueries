'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin(`ridecss-mediaqueries-remove`, function (opts) {
  opts = opts || { log: false };
  return function (css, result) {
    css.walkAtRules('media', function (rule) {
      if (!rule.nodes.length) {
        if (opts.log) console.log(`Found empty media query starting on line ${rule.source.start.line} ending ${rule.source.end.line}, removing.`);
        rule.remove();
      }
    });
  };
});
