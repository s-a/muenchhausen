"use strict";

 
function Boolean() {
   // Boolean.super_.apply(this, arguments);
    return this; 
}

// require("./../../extension/").extend(Boolean);

/**
 * returns a random Boolean 
 */
Boolean.prototype.random = function random() {
  this.value = Math.random() >= 0.5;
  var result = {
    value : this.value,
    text : function(){ return this.value.toString(); }
  };
  return result;
};
 
module.exports = Boolean;