
//console.log(methods);
var translate = require("node-google-translate-skidz");



var path = require("path");
var glob = require("glob");
var fs = require("fs");


var translateFile = function(filename, targetLanguage, done){
	var i = 0; 
	var f = require(filename);

	var xdone = function (key, translation) {
		f[key] = translation.split(/[\s.]+/);
		console.log(key, f[key]);
		for (var i = 0; i < f[key].length; i++) {
			f[key][i] = f[key][i].trim();
		}
	}
	//console.log(f)
	Object.keys(f).forEach(function(key1) {
	    //console.log(key1, f[key1]);
	  	i++;
	  	var tr = function(filename, targetLanguage, key){
			translate({
				text: f[key1].join("."),
				source: "en",
				target: targetLanguage
			}, function(result) {
				i--;
				
				xdone(key, result.translation);
				if(i === 0){
					var fn = filename.split(".");
					fn.pop();
					fn.pop();
					fn = fn.join(".") + "." + targetLanguage + ".json";
					done(fn, f)
				}
			});  
	  	}

	  	tr(filename, targetLanguage, key1);
	});
};

var writeTranslationFile = function(filename, translation) {
	// body...
	console.log(filename);
	fs.writeFile(filename, JSON.stringify(translation, null, 4), function(){

	});
 
};

glob("./../lib/**/i18n.en.json", {}, function (er, files) {
	console.log(files)
	var languages = require("./i18n.js");
	translateFile(files[0], languages[6], writeTranslationFile);
});