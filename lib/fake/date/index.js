var util = require( "util" );



function MDate(context, options) {
    MDate.super_.apply(this, arguments);
    this.setup = options;
    return this; 
}

var FakeExtension = require("./../../extension/");
var fakeExtension = new FakeExtension();
fakeExtension._assign(MDate);
//util.inherits(MDate, FakeExtension);
  

var prop = function (namespace, namespaceJSON){
  var namespaceParts = namespace.split(".");
  var result = namespace;
  for(var i = 1; i < namespaceParts.length; i++){
    result = result[namespaceParts[0]];
  }
  return result;
}
/**
 * current date based on template using configuration options.
 * @param {String} templateString a template string. For example `"now:{{{date.now 'suffix:am, min:20200901'}}}"`
 */
MDate.prototype.now = function now(context, options) {
  var dateValue = new Date();
	var setup = this._argv(arguments);
  var culture = this._culture(options);
  console.log(culture)
  // options.data.root.Globalize.locale(culture);
  // options.data.root.Globalize.load( require( "cldr-data" ).entireMainFor( culture ) );
	var str = options.data.root.Globalize(culture).formatDate(dateValue) + (setup.suffix ? setup.suffix : "");
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
 * @param {String} templateString a template string. For example `"now:{{{date.random 'suffix:am, min:20200901'}}}"`
 */
MDate.prototype.random = function random(context, options) {
	var date = randomDate();
	/*var setup = {};
  if (typeof arguments[0] === "string"){
    setup = RJSON.parse("{" + (arguments[0] || "") + "}");
  }*/
  var culture = this._culture(options);
  var result = {
    value : date,
    text : options.data.root.Globalize(culture).formatDate(date)
  };
	return result;
};

module.exports = MDate;