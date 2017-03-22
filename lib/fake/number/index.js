"use strict";

var path = require("path");

var i18nFilename = function(culture){
  var result = path.join(__dirname, "..", "..", "i18n", "numberformat", culture + ".json");
  return result;
}

function MNumber(context) { 
    this.culture = context.culture;
    // MNumber.super_.apply(this, arguments);
    this.i18n = require(i18nFilename(this.culture));
    return this; 
}

// require("./../../extension/").extend(MNumber);
 
function generateRandomNumber(min, max) {
    var result = Math.floor(Math.random() * max) + min;
    if (result > max){
      result = max - 1;
    }
    return result;
};


function randomNumber(setup){
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

    var result = generateRandomNumber(startDate, endDate);
    return result;
}


function numberWithCommas(x, delimiter) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
}

MNumber.prototype._text = function toString() {
  return numberWithCommas(this.value, this.i18n.numberFormatInfo.NumberGroupSeparator);
}

/**
 * random number based on template using configuration options.  
 * For example `rnd:$(date.random) rnd:$(date.random min : 1, max : 111)`
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