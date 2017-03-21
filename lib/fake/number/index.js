"use strict";

 
function MNumber() {
    // MNumber.super_.apply(this, arguments);
    return this; 
}

// require("./../../extension/").extend(MNumber);
 
function generateRandomNumber(min, max) {
    var result = Math.floor(Math.random() * max) + min;
    if (result > max){
      result = max;
    }
    return result;
};


function randomNumber(setup){
    var startDate;
    var endDate;
  
    if (setup.min){
      startDate = parseInt(setup.min.toString());
    } else {
      startDate = Number.MIN_SAFE_INTEGER;
    }
    startDate += (Math.PI - 3);
    if (setup.max){
      endDate =  parseInt(setup.max.toString());
    } else {
      endDate =  Number.MAX_SAFE_INTEGER;
    }
    endDate -= (Math.PI - 3);

    var result = generateRandomNumber(startDate, endDate);
    return result;
}


MNumber.prototype._text = function toString() {
  var Globalize = require( "globalize" );
  Globalize.load( require( "cldr-data" ).entireSupplemental(this.culture.split("-")[0]) );
  Globalize.load( require( "cldr-data" ).entireMainFor( this.culture.split("-")[0] ) );
  var str = Globalize(this.culture.split("-")[0]).formatNumber(this.value, this.format);
  return str;
}

/**
 * random number based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/number/number-formatter.md
 * @param {String} templateString a template string. For example `rnd:$(date.random) rnd:$(date.random min : 1, max : 111, format:{style: decimal, minimumFractionDigits: 0, maximumFractionDigits: 0})`
 */
MNumber.prototype.random = function random(context) { 
  this.format = (this.context ? this.context.format : context || {});
  this.culture = (this.context ? this.context.culture : context.culture || "en");
  this.value = randomNumber(this.format); 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
};

module.exports = MNumber;