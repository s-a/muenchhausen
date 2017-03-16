var RJSON = require( "relaxed-json" );
var Globalize = require( "globalize" );

var MDate = function(options) {
	this.culture = (options ? options.data.root.culture : "en");
	this.setup = options;
	return this;
};


function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

MDate.prototype.now = function(context, options) {

	var setup = RJSON.parse("{" + (arguments[0] || "") + "}");
	return Globalize(this.culture).formatDate(new Date()) + (setup.suffix ? setup.suffix : "");
};

function randomDate(){
   var startDate = new Date(2012,0,1).getTime();
   var endDate =  new Date(2015,0,1).getTime();
   var spaces = (endDate - startDate);
   var timestamp = Math.round(Math.random() * spaces);
   timestamp += startDate;
   return new Date(timestamp);
}

MDate.prototype.random = function() {
	var date = randomDate();
	var setup = RJSON.parse("{" + (arguments[0] || "") + "}");
	return Globalize(this.culture).formatDate(date);
};

module.exports = MDate;