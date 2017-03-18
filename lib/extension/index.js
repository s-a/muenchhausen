"use strict";

var util = require('util');
var RJSON = require( "relaxed-json" );


function FakeExtension(context, options){
  if (this.init){
    this.init();
  }

  return this;
};


FakeExtension.prototype._argv = function(){
    var setup = {};
    if (typeof arguments[0] === "string"){
      setup = RJSON.parse("{" + (arguments[0] || "") + "}");
    }
    return setup;
}


FakeExtension.prototype._assign = function(subClass){
    util.inherits(subClass, FakeExtension);
}

FakeExtension.prototype._culture = function(options){
  var result = "en";
  try{
    result = options.data.root.culture;
  } catch (e){

  }
  return result;
}
  

FakeExtension.prototype._globalize = function(){
  console.log(this)
  var options = this.setup;
  var result = this.setup.data.root.Globalize(this._culture() || "en");
  return result;
}
  
module.exports =  FakeExtension;