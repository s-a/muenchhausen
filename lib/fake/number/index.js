"use strict";

var I18n = require("./../../i18n");



function MNumber(context) {
  this.culture = context.culture;
  // MNumber.super_.apply(this, arguments);
  this.i18n = new I18n(this.culture, "numberformat").jsonLoader();
  return this;
}

// require("./../../extension/").extend(MNumber);



function generateRandomNumber(min, max) {
  var result = Math.random() * (max - min + 1) + min;
  return result;
};


function randomNumber(setup) {
  var startDate;
  var endDate;

  var min = setup.min && parseInt(setup.min.toString());
  if (Number.isNaN(min)) {
    startDate = Number.MIN_SAFE_INTEGER;
  } else {
    startDate = min + 1;
  }

  var max = setup.max && parseInt(setup.max.toString());
  if (Number.isNaN(max)) {
    endDate = Number.MAX_SAFE_INTEGER;
  } else {
    endDate = max - 1;
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
  this.format = context;
  this.culture = context.culture;
  this.value = randomNumber(this.format);
  return {
    value: this.value,
    text: this._text.bind(this)
  };
};

module.exports = MNumber;
