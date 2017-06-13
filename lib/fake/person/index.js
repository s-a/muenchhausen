"use strict";

var I18n = require("./../../i18n");


var randomGender = function () {
  var genders = ["male", "female"];
  var gender = Math.round(Math.random());
  return genders[gender];
}




function Person(context) {
  this.culture = context.culture;
  var males = new I18n(this.culture, "names-male").jsonLoader();
  var female = new I18n(this.culture, "names-female").jsonLoader();

  this.i18n = {};
  this.i18n.male = males;
  this.i18n.female = female;
  this.i18n.surnames = new I18n(this.culture, "surnames").jsonLoader();
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
    value: this.value,
    text: this._randomFirstname.bind(this)
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
    value: this.value,
    text: this._randomSurname.bind(this)
  };
};

module.exports = Person;
