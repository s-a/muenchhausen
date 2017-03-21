"use strict";


var fs = require("fs");
var path = require("path");
var glob = require("glob");
var options = {};
var all = []; 
var xfiles;
var processFiles = function processFiles(done) {
	if(xfiles.length === 0){ 
		done(); 
	} else {
		processFile(xfiles[0], function() {
			xfiles.shift();
			processFiles(done);
		});
	}
};

var processFile = function processFile(file, done) {
	var dir = path.dirname(file)
	var segments = dir.replace(/\\/g, "/").split("/");
	segments.shift()
	for (var i = 0; i < segments.length; i++) {
		segments[i] = (segments[i] === "lib" ? "Muenchhausen" : segments[i])
	}

	var f = path.basename(file);
	var output = path.join(".", "docs", segments.join("."), f) + ".md";
	if (f.toLowerCase() === "index.js"){
		f = "";
		output = path.join(".", "docs", segments.join("."), f) + ".md";
	} else {
		output = path.join(".", "docs", segments.join(".")) + "." + f + ".md";
	}
	console.log(file, output)
	var templateDir = "./node_modules/jsdox/templates/";
	var jsdox = require("jsdox");
	jsdox.generateForDir(file, path.join(output, ".."), templateDir, function(){
		fs.rename("./docs/index.md", output, function(err) {
			all.push(output);
			if ( err ) console.error("ERROR: " + err);
			done();
		});
	}); 
};

glob("./lib/**/*.js", options, function (er, files) {
	xfiles = files;
	processFiles(function(){
		var md = "# muenchhausen API\n\n";

		for (var i = 0; i < all.length; i++) {
			var bn = path.basename(all[i], ".md");
			all[i] = "[" + bn + "](" + bn + ".md)";
		}
		
		md += "- " + all.sort(function(a, b) {
			return a < b;
		}).join("\n- ")
		console.log("index.md written")
		fs.writeFileSync("docs/API.md", md);
	});
})