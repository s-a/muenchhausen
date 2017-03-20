"use strict";

 
function phone() {
   // phone.super_.apply(this, arguments);
    return this; 
}

// require("./../../extension/").extend(phone);

/**
 * returns a random phone in INTERNATIONAL format. The example shows a swiss number format. Different Region Codes are avialable at https://github.com/googlei18n/libphone/blob/master/java/libphone/test/com/google/i18n/phones/RegionCode.java#L22. 
 * @param {String} templateString a template string. For example `"phone.international:$(phone.international country:CH)"`
 */
phone.prototype.international = function international(options) {
  var culture = options.culture;
  var randomphone = Math.floor(Math.random() * 99999999999999999).toString();
  this.value = randomphone;
  var result = {
    value : randomphone,
    text : (function(){ 
          var PNF = require("google-libphonenumber").PhoneNumberFormat;
          var phoneUtil = require("google-libphonenumber").PhoneNumberUtil.getInstance();
          var land = options.country || (culture.toUpperCase() === "EN" ? "US" : culture.toUpperCase());
          var result = phoneUtil.parse(this.value, land.toUpperCase());
          result = phoneUtil.format(result, PNF.INTERNATIONAL);
          return result; 
        }).bind(this)
  };
  return result;
};

/**
 * returns a random phone in NATIONAL format. Different Region Codes are avialable at https://github.com/googlei18n/libphone/blob/master/java/libphone/test/com/google/i18n/phones/RegionCode.java#L22. 
 * @param {String} templateString a template string. For example `"phone.national:$(phone.national)"`
 */
phone.prototype.national = function national(options) {
  var culture = options.culture;
  var randomphone = Math.floor(Math.random() * 99999999999999999).toString();
  this.value = randomphone;
  var result = {
    value : randomphone,
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
 * returns a random phone in E164 format. Different Region Codes are avialable at https://github.com/googlei18n/libphone/blob/master/java/libphone/test/com/google/i18n/phones/RegionCode.java#L22. 
 * @param {String} templateString a template string. For example `"phone.E164:$(phone.E164)"`
 */
phone.prototype.e164 = function e164(options) {
  var culture = options.culture;
  var randomphone = Math.floor(Math.random() * 99999999999999999).toString();
  this.value = randomphone;
  var result = {
    value : randomphone,
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

module.exports = phone;