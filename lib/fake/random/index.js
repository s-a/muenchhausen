"use strict";

function Random() { 
    return this; 
}


var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

/**
 * Returns a random element from Array or Object.  
 * JavaScript example: random.element({of:[1,2,3,4,5]})  
 * Template example:
 * ```bash
 * $ mh "$(random.element of:[mh-1,mh-2,mh-3]) $(random.element) $(random.element of:{foo:5,unicorn:true,rainbow:blue})"
 * mh-1 ? true
 * ```
 */
Random.prototype.element = function now(context) {
  this.value = "?"; 
  if(context.of){
    if (Array.isArray(context.of)){
      this.value = context.of[Math.floor(Math.random() * context.of.length)];
    } else {
      this.value = randomProperty(context.of);
    };
  }
  return {
    value : this.value,
    text : (function(){
      return this.value.toString();
    }).bind(this)
  };
};

 
module.exports = Random;