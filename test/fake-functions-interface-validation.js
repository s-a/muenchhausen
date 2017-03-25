"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("en-GB");
  
 
describe("Validate fake methods", function () {

	function testExpectedFunction(name, fn, f){
		it(fn + " function should have function ." + name + "() which returns a string", function () {
			var x = f({culture : "en-GB"});
			var type = (typeof x[name]);
			type.should.be.equal("function");
			var test = x[name]({culture:"en-GB"});
			var typeTestResult = (typeof test);
			type.should.not.equal(undefined);
			type.should.not.equal(null);
			//test.should.not.equal("");
			typeTestResult.should.be.equal("string");
		});
	}

	function testExpectedProperty(name, fn, f){
		it(fn + " function should have property ." + name, function () {
			var x = f({});
			var type = (typeof x[name]);
			type.should.be.equalOneOf("string", "object", "number", "boolean");
		});
	}

  muenchhausen.eachModuleFunction(muenchhausen.fake, context, function(fn, f){
    describe(fn, function () {
      testExpectedFunction("text", fn, f)
      testExpectedProperty("value", fn, f)
    });
  });  

});