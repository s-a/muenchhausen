"use strict";

 
function MDate(context, options) { 
    this.culture = context && context.culture || "en";
    this.value = new Date();
    return this; 
} 

MDate.prototype._text = function text() {
  var Globalize = require( "globalize" );
  Globalize.load( require( "cldr-data" ).entireSupplemental(this.culture ) );
  Globalize.load( require( "cldr-data" ).entireMainFor( this.culture ) );
  var str = Globalize(this.culture).formatDate(this.value, this.format);
  return str;
}


/**
 * current date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
 * @param {String} templateString a template string. For example `"now:{{{date.now 'format : { skeleton: GyMMMEdhms }'}}}"`
 */
MDate.prototype.now = function now(context, options) {
  this.value = new Date();
  this.context = context;
  this.options = options;
  this.format = (this.context ? this.context.format : context.format || {});
  this.culture = (this.context ? this.context.culture : context.culture || "en");
 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
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
 * min and max are in format : `yyyymmddhhssnn` 
 * @param {String} templateString a template string. For example `rnd:{{{date.random 'min : 10200901, max : 20200901, format : { skeleton: GyMMMEdhms }'}}}`
 */
MDate.prototype.random = function random(context, options) {
  this.context = context;
  this.options = options;
  this.format = (this.context ? this.context.format : context.format || {});
  this.culture = (this.context ? this.context.culture : context.culture || "en");

  this.value = randomDate(context); 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
};

/**
 * future date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
 * min and max are in format : `yyyymmddhhssnn` 
 * @param {String} templateString a template string. For example `rnd:{{{date.future 'max : 20200901, format : { skeleton: GyMMMEdhms }'}}}`
 */
MDate.prototype.future = function future(context, options) {
  this.context = context;
  this.options = options;
  this.format = (this.context ? this.context.format : context.format || {});
  this.culture = (this.context ? this.context.culture : context.culture || "en");

  context.min = new Date();
  this.value = randomDate(context); 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
};

module.exports = MDate;