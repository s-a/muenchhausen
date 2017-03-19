"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen();
  
 
describe("Validate fake methods", function () {

  function testExpectedFunctionOrProperty(name, fn, f){
      it(fn + " function should have function ." + name + "() or property ." + name, function () {
          var x = f({culture : "en"});
          var type = (typeof x[name]);
          type.should.be.equalOneOf("function", "string", "object", "number");
      });
  }

  muenchhausen.eachModuleFunction(muenchhausen.fake, context, function(fn, f){
    describe("scan " + fn, function () {
      testExpectedFunctionOrProperty("text", fn, f)
    });
  });  

});