var RJSON = require( "relaxed-json" );

var MDate = function MDate(options) {
	this.culture = (options && options.data && options.data.root ? options.data.root.culture : "en");
	this.setup = options;
	return this;
};


MDate.prototype.now = function now(context, options) {
  var dateValue = new Date();
	var setup = {};
  if (typeof arguments[0] === "string"){
    setup = RJSON.parse("{" + (arguments[0] || "") + "}");
  }
	var str = options.data.root.Globalize(this.culture || "en").formatDate(dateValue) + (setup.suffix ? setup.suffix : "");
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

MDate.prototype.random = function random(context, options) {
	var date = randomDate();
	/*var setup = {};
  if (typeof arguments[0] === "string"){
    setup = RJSON.parse("{" + (arguments[0] || "") + "}");
  }*/
  var result = {
    value : date,
    text : options.data.root.Globalize(this.culture || "en").formatDate(date)
  };
	return result;
};

module.exports = MDate;