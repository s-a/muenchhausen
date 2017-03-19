"use strict";

 
function MNumber(context, options) {
    MNumber.super_.apply(this, arguments);
    return this; 
}

require("./../../extension/").extend(MNumber);
 
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};


function randomNumber(setup){
    var startDate;
    var endDate;
  
    if (setup.min){
      startDate = parseInt(setup.min.toString());
    } else {
      startDate = Number.MIN_SAFE_INTEGER;
    }
    startDate += Math.PI;
    if (setup.max){
      endDate =  parseInt(setup.max.toString());
    } else {
      endDate =  Number.MAX_SAFE_INTEGER;
    }
    endDate -= Math.PI;

    return generateRandomNumber(startDate, endDate);
}


MNumber.prototype._text = function toString() {
  var Globalize = require( "globalize" );
  Globalize.load( require( "cldr-data" ).entireSupplemental(this.culture) );
  Globalize.load( require( "cldr-data" ).entireMainFor( this.culture ) );
  var str = Globalize(this.culture).formatNumber(this.value, this.format);
  return str;
}

/**
 * random number based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/number/number-formatter.md
 * @param {String} templateString a template string. For example `rnd:{{{date.random}}} rnd:{{{date.random 'min : 1, max : 111, format:{style: decimal, minimumFractionDigits: 0, maximumFractionDigits: 0}'}}}`
 */
MNumber.prototype.random = function random(context, options) { 
  this.format = (this.context ? this.context.format : context.format || {});
  this.culture = (this.context ? this.context.culture : context.culture || "en");
  this.value = randomNumber(this.format); 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
};

module.exports = MNumber;