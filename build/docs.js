fs = require("fs");
path = require("path");


var glob = require("glob")
var options = {};
var all = [];
// options is optional
var processFile = function processFile(file) {
	var dir = path.dirname(file)
	var segments = dir.replace(/\\/g, "/").split("/");
	segments.shift()
	for (var i = 0; i < segments.length; i++) {
		segments[i] = (segments[i] === "lib" ? "Muenchhausen" : segments[i])
	}


	var output = "./docs/" + segments.join(".") + ".md";
	console.log(file, output)
	var templateDir = "./node_modules/jsdox/templates/";
	var jsdox = require("jsdox");
	all.push(output);
	jsdox.generateForDir(file, path.join(output, ".."), templateDir, function(str){
		fs.rename('./docs/index.md', output, function(err) {
		    if ( err ) console.error('ERROR: ' + err);
		});
	}); 
};

glob("./lib/**/*.js", options, function (er, files) {
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		processFile(file)
	}

	var md = "# muenchhausen API\n\n";

	for (var i = 0; i < all.length; i++) {
		var bn = path.basename(all[i], ".md");
		all[i] = "[" + bn + "](" + bn + ".md)";
	}
	
	md += "- " + all.sort(function(a, b) {
    	return a < b;
	}).join("\n- ")
	console.log(md)
	fs.writeFileSync("index.md", md);
		fs.rename('index.md', './docs/index.md', function(err) {
		    if ( err ) console.error('ERROR: ' + err);
	    console.log("index file was saved!");
		});

})