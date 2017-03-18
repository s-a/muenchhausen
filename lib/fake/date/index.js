"use strict";

 
function MDate(context, options) {
    MDate.super_.apply(this, arguments);
    return this; 
}

require("./../../extension/").extend(MDate);

/**
 * current date based on template using configuration options.
 * @param {String} templateString a template string. For example `"now:{{{date.now 'format : { skeleton: GyMMMEdhms }'}}}"`
 */
MDate.prototype.now = function now(context, options) {
  var dateValue = new Date();
	var setup = this._argv.apply(this, arguments);
 var culture = this._culture(options);
  // options.data.root.Globalize.locale(culture);
  // options.data.root.Globalize.load( require( "cldr-data" ).entireMainFor( culture ) );
	/// var str = this._globalize(options).formatDate(dateValue) + (setup.suffix ? setup.suffix : "")
  var str = options.data.root.Globalize(culture).formatDate(dateValue, setup.format) + (setup.suffix ? setup.suffix : "");
  var result = {
    value : dateValue,
    text : str
  };
  return result;
};

function randomDate(){
   var startDate = new Date(2012,0,1).getTime();
   var endDate =  new Date(2015,0,1).getTime();
   var spaces = (endDate - startDate);
   var timestamp = Math.round(Math.random() * spaces);
   timestamp += startDate;
   return new Date(timestamp);
}

/**
 * random date based on template using configuration options.
 * @param {String} templateString a template string. For example `rnd:{{{date.random 'format : { skeleton: GyMMMEdhms }'}}}`
 */
MDate.prototype.random = function random(context, options) {
	var date = randomDate();
	/*var setup = {};
  if (typeof arguments[0] === "string"){
    setup = RJSON.parse("{" + (arguments[0] || "") + "}");
  }*/
  var setup = this._argv.apply(this, arguments);
  var culture = this._culture(options);
  var str = options.data.root.Globalize(culture).formatDate(date, setup.format);
  var result = {
    value : date,
    text : str
  };
	return result;
};

module.exports = MDate;