"use strict";

var fs = require("fs");
var path = require("path");


function Address() { 
    return this; 
}

var tryRequire = function(filename){
  var result = null;
  if (fs.existsSync(filename)){
    result = require(filename);
  }
  return result;
}

var getI18nStorage = function(culture){
  var cultureParts = culture.toLowerCase().split("-");
  var dir = path.join(__dirname, "../../i18n/address");
  var fn = cultureParts[0] + ".json";
  var filename = path.join(dir, fn);
  var storage = tryRequire(filename);
  if (!storage){
    fn = cultureParts[1] + ".json";
    filename = path.join(dir, fn);
    storage = tryRequire(filename);
    if (!storage){
      fn = "us.json";
      filename = path.join(dir, fn);
      storage = tryRequire(filename);
/*      if (!storage){
        console.log(culture, "nothing found");
        process.exit(1)
      }*/
    }
  }

  return storage;
}


Address.prototype._random = function _random(items) { 
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}



Address.prototype.__random = function __random(context) {
  this.value = ""; 
  this.addressList = (this.addressList || getI18nStorage(context.culture/* || this.culture*/));
  this.currentAddress = this._random(this.addressList);
  return ;
};
 
Address.prototype._rnd = function _rnd(context) {
  if (!this.currentAddress){
    this.__random(context);
  }
}
 
Address.prototype._res = function _res(addressPart, context) {
  this._rnd(context);
  if (addressPart === null){
    return {
      value : "",
      text : function(){
        return "";
      }
    }
  } else {
    return {
      value : this.currentAddress[addressPart],
      text : (function(){
        return this.currentAddress[addressPart];
      }).bind(this)
    };
  }
}

/**
 * Returns an empty string but inititates a new random address element.
 * JavaScript example: address.random()  
 * Template example:
 * ```bash
 * $ mh "$(address.random)$(address.street)"
 * BEVERIDGE PL SW
 * ```
 */
Address.prototype.random = function lon(context) {
  return this._res(null, context);
};

/**
 * Returns an lon value as string from current address.
 * JavaScript example: address.lon()  
 * Template example:
 * ```bash
 * $ mh "$(address.lon)"
 * -122.3843085
 * ```
 */
Address.prototype.lon = function lon(context) {
  return this._res("lon", context);
};

/**
 * Returns an lat value as string from current address.
 * JavaScript example: address.lat()  
 * Template example:
 * ```bash
 * $ mh "$(address.lat)"
 * 47.6854272
 * ```
 */
Address.prototype.lat = function lat(context) {
  return this._res("lat", context);
};

/**
 * Returns street name from current address.
 * JavaScript example: address.street()  
 * Template example:
 * ```bash
 * $ mh "$(address.street)"
 * BONAIR DR SW
 * ```
 */
Address.prototype.street = function street(context) {
  return this._res("street", context);
};

/**
 * Returns a city name from current address.
 * JavaScript example: address.ctiy()  
 * Template example:
 * ```bash
 * $ mh "$(address.ctiy)"
 * Bernhard-Rösler-Straße
 * ```
 */
Address.prototype.city = function city(context) {
  return this._res("city", context);
};

/**
 * Returns a district name from current address.
 * JavaScript example: address.district()  
 * Template example:
 * ```bash
 * $ mh "$(address.district)"
 * Grefrath
 * ```
 */
Address.prototype.district = function district(context) {
  return this._res("district", context);
};

/**
 * Returns a postcode aka zipcode from current address.
 * JavaScript example: address.postcode()  
 * Template example:
 * ```bash
 * $ mh "$(address.postcode)"
 * 47929
 * ```
 */
Address.prototype.postcode = function postcode(context) {
  return this._res("postcode", context);
};
 
/**
 * Returns a housenumber from current address.
 * JavaScript example: address.number()  
 * Template example:
 * ```bash
 * $ mh "$(address.number)"
 * 35
 * ```
 */
Address.prototype.number = function number(context) {
  return this._res("number", context);
};
 
module.exports = Address;