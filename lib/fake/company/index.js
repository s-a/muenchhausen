"use strict";

var I18n = require("./../../i18n");


function Company(context) {
  this.culture = context.culture;
  this.i18n = new I18n(this.culture, "company").jsonLoader();
  return this;
}

Company.prototype._randomName = function firstname() {
  var item = this.i18n[Math.floor(Math.random() * this.i18n.length)];
  return item;
}


/**
 * Returns a random company name.  
 * For example `rnd:$(company.name)`
 */
Company.prototype.name = function firstname() {
  this.value = "❤️";
  return {
    value: this.value,
    text: this._randomName.bind(this)
  };
};

module.exports = Company;
