"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen();
  
var Globalize = require( "globalize" );
Globalize.load( require( "cldr-data" ).entireSupplemental() );


var context = {
  options : {
    data : {
      root : {
        culture : "en",
        Globalize : Globalize
      }
    }
  }
}

describe("Validate fake methods", function () {

  function testExpectedFunctionOrProperty(name, fn, f){
      it(fn + " function should have function ." + name + "() or property ." + name, function () {
          var x = f(context, context.options);
          var type = (typeof x[name]);
          type.should.be.equalOneOf("function", "string", "object");
      });
  }

  muenchhausen.eachModuleFunction(muenchhausen.fake, context, function(fn, f){
    describe("scan " + fn, function () {
      testExpectedFunctionOrProperty("text", fn, f)
      testExpectedFunctionOrProperty("value", fn, f)
    });
  });  

});