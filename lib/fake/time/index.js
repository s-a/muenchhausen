"use strict";

var path = require("path");

 function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

var i18nFilename = function(culture){
  var result = path.join(__dirname, "..", "..", "i18n", "datetimeformat", culture + ".json");
  return result;
}

function Time(context) { 
    this.culture = context.culture;
    this.value = new Date();
    this.i18n = require(i18nFilename(this.culture));
    return this; 
}  

/**
 * current time formated based on current culture. A custom format is optional possible.
 * JavaScript example: .now({"format" : "hh:mm:ss"})
 * Template example: `"now:$(date.now format:'hh:mm:ss')"`
 */
Time.prototype.now = function now(context) {
  this.value = new Date();
  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.longTimePattern)
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

function randomTime(setup){
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
 * random date formated based on current culture. A custom format is optional possible.
 * JavaScript example: time.random()
 * Template example: `"random:$(time.random)"`
 */
Time.prototype.random = function random(context) { 
  this.value = randomTime(context);  
  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.longTimePattern)
    }).bind(this)
  };
};



/**
 * random time in future formated based on current culture. A custom format is optional possible.
 * JavaScript example: time.future()
 * Template example: `"future:$(time.future)"`
 */
Time.prototype.future = function future(context) { 
  context.min = renderMunchhauseDateTime(new Date()); 
  this.value = randomTime(context);
  var now = new Date();  
  if (this.value.getHours() <= now.getHours()){
    var rest = 24 - now.getHours();
    var rnd = Math.floor(Math.random() * rest) + now.getHours()
    this.value.setHours(rnd);
  }

  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.longTimePattern)
    }).bind(this)
  };
};


/**
 * random time from past formated based on current culture. A custom format is optional possible.
 * JavaScript example: time.past()
 * Template example: `"past:$(time.past)"`
 */
Time.prototype.past = function past(context) {
  context.max = renderMunchhauseDateTime(new Date());
  this.value = randomTime(context);  
  return {
    value : this.value,
    text : (function(){
      return dateFormater(this.value, context.format || this.i18n.longTimePattern)
    }).bind(this)
  };
};
 

var formatDatePart = function(fragment, text, value){
  var x = fragment;
  /*eslint-disable */
  var result; // eslint-disable-line no-used-vars
  /*eslint-enable */
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
/*  var year = date.getFullYear().toString();
  var month = pad(date.getMonth().toString(), 2);
  var day = pad(date.getDate().toString(), 2);*/
  var hour = pad(date.getHours().toString(), 2);
  var minute = pad(date.getMinutes().toString(), 2);
  var second = pad(date.getSeconds().toString(), 2);
   
/*  x = formatDatePart(x, "y", year);
  x = formatDatePart(x, "M", month);
  x = formatDatePart(x, "d", day);*/
  x = formatDatePart(x, "H", hour);
  x = formatDatePart(x, "m", minute);
  x = formatDatePart(x, "s", second);

  return x;
}

 
 
 

module.exports = Time;