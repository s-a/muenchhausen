"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("en");
  
 
describe("Validate fake methods", function () {

	function testExpectedFunction(name, fn, f){
		it(fn + " function should have function ." + name + "() or property ." + name, function () {
			var x = f({culture : "en"});
			var type = (typeof x[name]);
			type.should.be.equal("function");
			var test = x[name]({culture:"en"});
			type.should.not.equal(undefined);
			type.should.not.equal(null);
			test.should.not.equal("");
		});
	}

	function testExpectedProperty(name, fn, f){
		it(fn + " function should have function ." + name + "() or property ." + name, function () {
			var x = f({culture : "en"});
			var type = (typeof x[name]);
			type.should.be.equalOneOf("string", "object", "number");
		});
	}

  muenchhausen.eachModuleFunction(muenchhausen.fake, context, function(fn, f){
    describe("scan " + fn, function () {
      testExpectedFunction("text", fn, f)
      testExpectedProperty("value", fn, f)
    });
  });  

});