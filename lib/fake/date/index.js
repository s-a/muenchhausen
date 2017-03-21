"use strict";

var fs = require("fs");
var path = require("path");

 function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

var i18nFilename = function(culture){
  var result = path.join(__dirname, "i18n", culture.toLowerCase() + ".json");
  if (!fs.existsSync(result)){
    result = path.join(__dirname, "i18n", "en-GB.json");
  }
  return result;
}

function MDate(context) { 
    this.culture = context.culture || "en-GB";
    this.value = new Date();
    this.i18n = require(i18nFilename(this.culture));
    return this; 
}  

/**
 * current date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
 * @param {String} templateString a template string. For example `"now:$(date.now format : { skeleton: GyMMMEdhms })"`
 */
MDate.prototype.now = function now(context) {
  this.value = new Date();
  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.shortDatePattern)
    }).bind(this)
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
MDate.prototype.random = function random(context) { 
  this.value = randomDate(context);  
  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.shortDatePattern)
    }).bind(this)
  };
};



/**
 * future date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
 * min and max are in format : `yyyymmddhhssnn` 
 * @param {String} templateString a template string. For example `rnd:$(date.future max : 20200901, format : { skeleton: GyMMMEdhms })`
 */
MDate.prototype.future = function future(context) { 
  context.min = renderMunchhauseDateTime(new Date()); 
  this.value = randomDate(context);  
  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.shortDatePattern)
    }).bind(this)
  };
};

/**
 * past date based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md
 * min and max are in format : `yyyymmddhhssnn` 
 * @param {String} templateString a template string. For example `rnd:$(date.past min : 198800901, format : { skeleton: GyMMMEdhms })`
 */
MDate.prototype.past = function past(context) {
  context.max = renderMunchhauseDateTime(new Date());
  this.value = randomDate(context);  
  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.shortDatePattern)
    }).bind(this)
  };
};

/**
 * random month name based on current culture 
 * @param {String} templateString a template string. For example `rnd:$(date.month)`
 */
MDate.prototype.month = function month() {
  var randomMonth = Math.round(Math.random() * 11);
  this.value = randomMonth; 
  return {
    value : this.value,
    text :  this._getMonth.bind(this)
  };
};

 

var formatDatePart = function(fragment, text, value){
  var x = fragment;
  var result;
  var i = 0;
  var reg = new RegExp(text, "g");   
  while((result = reg.exec(fragment)) !== null) {
    x = x.replace(text, value[i]);
    i++;
  }
  return x;
}

var dateFormater = function(date, format){
  var x = format;
  var year = date.getFullYear().toString();
  var month = pad(date.getMonth().toString(), 2);
  var day = pad(date.getDate().toString(), 2);
  var hour = pad(date.getHours().toString(), 2);
  var minute = pad(date.getMinutes().toString(), 2);
  var second = pad(date.getSeconds().toString(), 2);
   
  x = formatDatePart(x, "y", year)
  x = formatDatePart(x, "M", month)
  x = formatDatePart(x, "d", day)
  x = formatDatePart(x, "h", hour)
  x = formatDatePart(x, "m", minute)
  x = formatDatePart(x, "s", second)

  return x;
}

 

MDate.prototype._getWeekday = function _getWeekday() {
  return this.i18n.weekdays[this.value]; 
};

MDate.prototype._getMonth = function _getMonth() {
  return this.i18n.month[this.value]; 
};

/**
 * random weekday name based on current culture 
 * @param {String} templateString a template string. For example `rnd:$(date.month)`
 */
MDate.prototype.weekday = function weekday() {
  var randomDay = Math.round(Math.random() * 28);
  var date = new Date(2001, 1, randomDay)
  this.value = date.getDay(); 
  return {
    value : this.value,
    text : this._getWeekday.bind(this)
  };
};

module.exports = MDate;