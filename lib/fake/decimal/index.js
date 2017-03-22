"use strict";

var path = require("path");

var i18nFilename = function(culture){
  var result = path.join(__dirname, "..", "..", "i18n", "numberformat", culture + ".json");
  return result;
}

function Decimal(context) { 
    this.culture = context.culture;
    // Decimal.super_.apply(this, arguments);
    this.i18n = require(i18nFilename(this.culture));
    return this; 
}

// require("./../../extension/").extend(Decimal);
 


function generateRandomDecimal(min, max) {
    var result = Math.random() * (max - min) + min;
    var result2 = Math.random() * (99999999999) + 9999999;
    result2 = result2 / 100000000000
    result = result.toString() + result2;
    return result;
};


function randomDecimal(setup){
    var startDate;
    var endDate;
  
    if (setup.min){
      startDate = parseInt(setup.min.toString()) + 1;
    } else {
      startDate = Number.MIN_SAFE_INTEGER;
    }
    if (setup.max){
      endDate =  parseInt(setup.max.toString()) - 1;
    } else {
      endDate =  Number.MAX_SAFE_INTEGER;
    }

    var result = generateRandomDecimal(startDate, endDate);
    return result;
}

Decimal.prototype._text = function toString() {
    var parts = this.value.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.i18n.numberFormatInfo.NumberGroupSeparator);
    var result = parts[0] + this.i18n.numberFormatInfo.NumberDecimalSeparator + parts[1].substring(0, this.format.decimalplaces);
    return result;
}

/**
 * random decimal based on template using configuration options.  
 * For example `rnd:$(decimal.random) rnd:$(decimal.random min:1,max:111,decimalplaces:3)`
 */
Decimal.prototype.random = function random(context) { 
  this.format = context;
  this.culture = context.culture;
  this.value = randomDecimal(this.format); 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
};

module.exports = Decimal;