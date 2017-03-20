"use strict";

 
function Phonenumber() {
   // Phonenumber.super_.apply(this, arguments);
    return this; 
}

// require("./../../extension/").extend(Phonenumber);

/**
 * returns a random Phonenumber in INTERNATIONAL format. The example shows a swiss number format. Different Region Codes are avialable at https://github.com/googlei18n/libphonenumber/blob/master/java/libphonenumber/test/com/google/i18n/phonenumbers/RegionCode.java#L22. 
 * @param {String} templateString a template string. For example `"phonenumber.international:$(phonenumber.international country:CH)"`
 */
Phonenumber.prototype.international = function international(options) {
  var culture = options.culture;
  var randomPhonenumber = Math.floor(Math.random() * 99999999999999999).toString();
  this.value = randomPhonenumber;
  var result = {
    value : randomPhonenumber,
    text : (function(){ 
          var PNF = require("google-libphonenumber").PhoneNumberFormat;
          var phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();
          var land = options.country || (culture.toUpperCase() === "EN" ? "US" : culture.toUpperCase());
          var result = phoneUtil.parse(this.value, land.toUpperCase());
          console.log(land)
          result = phoneUtil.format(result, PNF.INTERNATIONAL);
          return result; 
        }).bind(this)
  };
  return result;
};

/**
 * returns a random Phonenumber in NATIONAL format. Different Region Codes are avialable at https://github.com/googlei18n/libphonenumber/blob/master/java/libphonenumber/test/com/google/i18n/phonenumbers/RegionCode.java#L22. 
 * @param {String} templateString a template string. For example `"phonenumber.national:$(phonenumber.national)"`
 */
Phonenumber.prototype.national = function national(options) {
  var culture = options.culture;
  var randomPhonenumber = Math.floor(Math.random() * 99999999999999999).toString();
  this.value = randomPhonenumber;
  var result = {
    value : randomPhonenumber,
    text : (function(){ 
          var PNF = require("google-libphonenumber").PhoneNumberFormat;
          var phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();
          var land = options.country || (options.culture.toUpperCase() === "EN" ? "US" : culture.toUpperCase());
          var result = phoneUtil.parse(this.value, land.toUpperCase());
          result = phoneUtil.format(result, PNF.NATIONAL);
          return result; 
        }).bind(this)
  };
  return result;
};

/**
 * returns a random Phonenumber in E164 format. Different Region Codes are avialable at https://github.com/googlei18n/libphonenumber/blob/master/java/libphonenumber/test/com/google/i18n/phonenumbers/RegionCode.java#L22. 
 * @param {String} templateString a template string. For example `"phonenumber.E164:$(phonenumber.E164)"`
 */
Phonenumber.prototype.e164 = function e164(options) {
  var culture = options.culture;
  var randomPhonenumber = Math.floor(Math.random() * 99999999999999999).toString();
  this.value = randomPhonenumber;
  var result = {
    value : randomPhonenumber,
    text : (function(){ 
          var PNF = require("google-libphonenumber").PhoneNumberFormat;
          var phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();
          var land = options.country || (options.culture.toUpperCase() === "EN" ? "US" : culture.toUpperCase());
          var result = phoneUtil.parse(this.value, land.toUpperCase());
          result = phoneUtil.format(result, PNF.E164);
          return result; 
        }).bind(this)
  };
  return result;
};

module.exports = Phonenumber;