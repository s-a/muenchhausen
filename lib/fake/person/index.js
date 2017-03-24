"use strict";

var fs = require("fs");
var path = require("path");


var randomGender = function(){
  var genders = ["male", "female"];
  var gender = Math.round(Math.random());
  return genders[gender];
}

var try18nFilename = function(shortCulture, gender){
  var dir = path.join(__dirname, "..", "..", "i18n", "names", gender);
  var fn = path.join(dir, shortCulture + ".json");
  if (!fs.existsSync(fn)){
    fn = false;
  }
  return fn;
}

var i18nFilename = function(setup){
  var cultures = setup.culture.toLowerCase().split("-");
  var shortCulture = cultures[0];
  var fn = try18nFilename(shortCulture, setup.gender);
  if (fn === false){
    shortCulture = cultures[1];
    fn = try18nFilename(shortCulture, setup.gender);
    if (fn === false){
      shortCulture = "en";
      fn = try18nFilename(shortCulture, setup.gender);
    }
  }
  return fn;
}

var getI18nSurnamesStorage = function getI18nSurnamesStorage(culture) {
	var cu = culture.split("-")[0].toLowerCase();
	var dir = path.join(__dirname, "..", "..", "i18n", "surnames");
  var fn = path.join(dir, cu + ".json");
  if (!fs.existsSync(fn)){
    fn = path.join(__dirname, "..", "..", "i18n", "surnames", "en.json");
  }
  return fn;
}


function Person(context) { 
    this.culture = context.culture;

    var males = require(i18nFilename({culture : this.culture, gender: "male"}));
    var female = require(i18nFilename({culture : this.culture, gender: "female"}));
    
    this.i18n = {};
    this.i18n.male = males;
    this.i18n.female = female;
    this.i18n.surnames = require(getI18nSurnamesStorage(this.culture));
    return this; 
}

Person.prototype._randomFirstname = function _randomFirstname() { 
  var gender = (this.context ? this.context.gender : null) || randomGender();
  var items = this.i18n[gender]
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

Person.prototype._randomSurname = function _randomSurname() { 
  var items = this.i18n.surnames;
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}


/**
 * Returns a random person name based on template using configuration options.  
 * For example `rnd:$(person.firstname gender:female)`
 */
Person.prototype.firstname = function firstname(context) { 
  this.context = context;
  this.culture = context.culture;
  this.value = "❤️"; 
  return {
    value : this.value,
    text : this._randomFirstname.bind(this)
  };
};

/**
 * Returns a random person surname.  
 * For example `rnd:$(person.lastname gender:female)`
 */
Person.prototype.lastname = function lastname(context) { 
  this.context = context;
  this.culture = context.culture;
  this.value = "❤️"; 
  return {
    value : this.value,
    text : this._randomSurname.bind(this)
  };
};

module.exports = Person;