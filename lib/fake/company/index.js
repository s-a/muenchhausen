"use strict";
 
var path = require("path");

var i18nFilename = function(){
  return path.join(__dirname, "..", "..", "company.json");
}


function Company() { 
    this.i18n = require(i18nFilename());
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
    value : this.value,
    text : this._randomName.bind(this)
  };
};

module.exports = Company;