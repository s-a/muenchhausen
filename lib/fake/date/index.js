"use strict";

 
function MDate(context, options) {
    MDate.super_.apply(this, arguments);
    return this; 
}

require("./../../extension/").extend(MDate);

/**
 * current date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
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


function minTime(){
  return new Date(1, 0, 1).getTime();
}

function maxTime(){
  return new Date(9999, 0, 1).getTime();
}

function parseMunchhauseDateTime(str){
    var year = parseInt(str.substring(0, 4), 10);
    var month = parseInt(str.substring(3, 2), 10) - 1;
    var day = parseInt(str.substring(5, 2), 10) - 1;
    var result = new Date(year, month, day).getTime();
    return result;
}

function randomDate(setup){
    var startDate;
    var endDate;
  
    if (setup.min){
      startDate = parseMunchhauseDateTime(setup.min.toString());
    } else {
      startDate = minTime();
    }
    if (setup.max){
      endDate =  parseMunchhauseDateTime(setup.max.toString());
    } else {
      endDate =  maxTime();
    }

   var spaces = (endDate - startDate);
   var timestamp = Math.round(Math.random() * spaces);
   timestamp += startDate;
   return new Date(timestamp);
}

/**
 * random date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
 * @param {String} templateString a template string. For example `rnd:{{{date.random 'format : { skeleton: GyMMMEdhms }'}}}`
 */
MDate.prototype.random = function random(context, options) {
	/*var setup = {};
  if (typeof arguments[0] === "string"){
    setup = RJSON.parse("{" + (arguments[0] || "") + "}");
  }*/
  var setup = this._argv.apply(this, arguments);
	var date = randomDate(setup);
  var culture = this._culture(options);
  var str = options.data.root.Globalize(culture).formatDate(date, setup.format);
  var result = {
    value : date,
    text : str
  };
	return result;
};

module.exports = MDate;