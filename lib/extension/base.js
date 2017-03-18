"use strict";

var util = require("util");
var RJSON = require( "relaxed-json" );



/*var prop = function (namespace, namespaceJSON){
  var namespaceParts = namespace.split(".");
  var result = namespace;
  for(var i = 1; i < namespaceParts.length; i++){
    result = result[namespaceParts[0]];
  }
  return result;
}
*/

/**
 * The base FakeExtension. Useful to write your own extensions.  
 * *example:*  
 * ```javascript 
 * function Currency(context, options) {
 *    Currency.super_.apply(this, arguments);
 *    return this; 
 * }
 * require("./../../extension/").extend(Currency);
 * ```
 */
function FakeExtension(context, options){
  if (this.init){
    this.init();
  }

  return this;
};

/**
 * Get template item Parms which was passed via templates like `now:{{{date-now 'suffix:am'}}}`.
 */
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

/**
 * Return the current culture which defaults to  `en`.
 */
FakeExtension.prototype._culture = function(options){
  var result = "en";
  try{
    result = options.data.root.culture;
  } catch (e){

  }
  return result;
}
  

FakeExtension.prototype._globalize = function(options){
  var result = options.data.root.Globalize(this._culture() || "en");
  return result;
}
  
module.exports =  FakeExtension;