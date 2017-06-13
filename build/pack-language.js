"use strict";

var fs = require("fs")
var glob = require("glob")
var path = require("path")

var argv = require("minimist")(process.argv.slice(2));
console.dir(argv);

function bundle(languageFilter) {
  // options is optional
  var p = path.join(__dirname, "..", "/lib/i18n/**/" + languageFilter + ".json");
  console.log(p)
  glob(p, {}, function (er, files) {
    var result = {};
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var culture = path.basename(file, ".json");
      var folders = path.resolve(path.dirname(file)).split(path.sep);
      var moduleName = folders[folders.length - 1];
      if (!result[moduleName]) result[moduleName] = {};
      if (!result[moduleName][culture]) result[moduleName][culture] = JSON.parse(fs.readFileSync(file));
    }
    var js = fs.readFileSync(path.join(__dirname, "..", "/dist/bundle.js")).toString()
    var js = "(function(){\nvar i18n = " + JSON.stringify(result, null, "  ", 4) + ";\n" + js + "\n})();";
    fs.writeFileSync(path.join(__dirname, "..", "/dist/muenchhausen-" + languageFilter.replace("*", "all-languages") + ".js"), js)
  });
}


bundle(argv.languagefilter);
