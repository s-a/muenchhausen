"use strict";

 function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function MDate(context) { 
    this.culture = (context && context.culture) ? context.culture : "en";
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
 * @param {String} templateString a template string. For example `"now:$(date.now format : { skeleton: GyMMMEdhms })"`
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
    var day = parseInt(str.substring(5, 2), 10);
    var result = new Date(year, month, day).getTime();
    return result;
}

function renderMunchhauseDateTime(dt){
    var year = dt.getFullYear().toString();
    var month = pad((dt.getMonth() + 1).toString(), 2);
    var day = pad(dt.getDate().toString(), 2);
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
 * @param {String} templateString a template string. For example `rnd:$(date.random min : 10200901, max : 20200901, format : { skeleton: GyMMMEdhms })`
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
 * @param {String} templateString a template string. For example `rnd:$(date.future max : 20200901, format : { skeleton: GyMMMEdhms })`
 */
MDate.prototype.future = function future(context, options) {
  this.context = context;
  this.options = options;
  this.format = (this.context ? this.context.format : context.format || {});
  this.culture = (this.context ? this.context.culture : context.culture || "en");

  context.min = renderMunchhauseDateTime(new Date());
  this.value = randomDate(context); 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
};

/**
 * past date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
 * min and max are in format : `yyyymmddhhssnn` 
 * @param {String} templateString a template string. For example `rnd:$(date.past min : 198800901, format : { skeleton: GyMMMEdhms })`
 */
MDate.prototype.past = function past(context, options) {
  this.context = context;
  this.options = options;
  this.format = (this.context ? this.context.format : context.format || {});
  this.culture = (this.context ? this.context.culture : context.culture || "en");

  context.max = renderMunchhauseDateTime(new Date());
  this.value = randomDate(context); 
  return {
    value : this.value,
    text : this._text.bind(this)
  };
};

/**
 * random month name based on current culture 
 * @param {String} templateString a template string. For example `rnd:$(date.month)`
 */
MDate.prototype.month = function month(context) {
  this.context = context;
  this.culture = (this.context ? this.context.culture : context.culture || "en");
  var randomMonth = Math.round(Math.random() * 11);
  this.value = randomMonth; 
  return {
    value : this.value,
    text : (function(){
      var result;
      var date = new Date(2001, this.value, 1)
      if (this.culture === "en"){
        var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        result = monthNames[date.getMonth()];
      } else {
        var Globalize = require( "globalize" );
        Globalize.load( require( "cldr-data" ).entireSupplemental(this.culture ) );
        Globalize.load( require( "cldr-data" ).entireMainFor( this.culture ) );
        result = Globalize(this.culture).formatDate(date, { raw : "MMMM" })
      }
      return result;
    }).bind(this)
  };
};

/**
 * random weekday name based on current culture 
 * @param {String} templateString a template string. For example `rnd:$(date.month)`
 */
MDate.prototype.weekday = function weekday(context) {
  this.context = context;
  this.culture = (this.context ? this.context.culture : context.culture || "en");
  var randomDay = Math.round(Math.random() * 28);
  var date = new Date(2001, 1, randomDay)
  this.value = date.getDay(); 
  return {
    value : this.value,
    text : (function(){
      var result;
      if (this.culture === "en"){ // fastest way
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        result = weekday[date.getDay()];
      } else {
        var Globalize = require( "globalize" );
        Globalize.load( require( "cldr-data" ).entireSupplemental(this.culture ) );
        Globalize.load( require( "cldr-data" ).entireMainFor( this.culture ) );
        result = Globalize(this.culture).formatDate(date, { raw : "EEEE" });
      }
      return result;
    }).bind(this)
  };
};

module.exports = MDate;