"use strict";
var glob = require("glob");
var path = require("path");
/*var should = */require("should");


var jsonIsValid = function jsonIsValid(filename) {
	var j = require(filename);
	(typeof j).should.be.oneOf("array", "object", filename);
	if (j instanceof Array){
		j.length.should.be.above(8, filename);
	}
}

var jsonFiles = [];

before(function before(done) {
	glob("./lib/i18n/**/*.json", function(err, files){
		jsonFiles = files;
		done();
	});
});

describe("i18n-json-files", function() {
	this.timeout(10 * 1000);
	it("should contain valid JSON (Array) in ", function() {
		for (var i = jsonFiles.length - 1; i >= 0; i--) {
			var f = path.resolve(jsonFiles[i]);
			jsonIsValid(f);
		}
	});	
});