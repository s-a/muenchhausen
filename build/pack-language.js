var fs = require("fs")
var glob = require("glob")
var path = require("path")



// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function (dir, filelist) {
  var path = path || require("path");
  var fs = fs || require("fs"),
    files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function (file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      filelist.push(file);
    }
  });
  return filelist;
};

// options is optional
var p = path.join(__dirname, "..", "/lib/i18n/**/*.json");
console.log(p)
glob(p, {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  var result = {};
  for (var i = 0; i < files.length; i++) {
    var file = files[i].toLowerCase();
    var culture = path.basename(file, ".json");
    var folders = path.resolve(path.dirname(file)).split(path.sep);
    var moduleName = folders[folders.length - 1];
    if (!result[moduleName]) result[moduleName] = {};
    if (!result[moduleName][culture]) result[moduleName][culture] = JSON.parse(fs.readFileSync(file));
    //console.log(moduleName, culture, file);
  }
  var js = fs.readFileSync(path.join(__dirname, "..", "/dist/bundle.js")).toString()
  var js = "(function(){\nvar i18n = " + JSON.stringify(result, null, "  ", 4) + ";\n" + js + "\n})();";
  // fs.writeFileSync(path.join(__dirname, "..", "/dist/i18n.json"), JSON.stringify(result))
  fs.writeFileSync(path.join(__dirname, "..", "/dist/bundle-all.js"), js)
});
