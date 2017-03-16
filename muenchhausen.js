var Globalize = require( "globalize" );
Globalize.load( require( "cldr-data" ).entireSupplemental() );

var Handlebars = require("handlebars");


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var Fake = function() {
	this.Date = require("./date.js");
	this.date = new this.Date();
	return this;
};

var Muenchhausen = function(culture) {
	Globalize.load( require( "cldr-data" ).entireMainFor( culture ) );
	this.culture = culture;
	this.initialize();
	return this;
};

Muenchhausen.prototype.handlebarsHelper = function(context, options) {
	var namespace = options.name.split("-");
	
	f1 = capitalizeFirstLetter(namespace[0]);
	f2 = namespace[1];
	var fn = new this.fake[f1](options);
	var result = fn[f2].apply(this, arguments);
	return result;
};


Muenchhausen.prototype.initialize = function() {
	this.fake = new Fake();
	var methods = [];
	for (var m in this.fake.date) {
	    if (typeof this.fake.date[m] == "function") {
	        methods.push("date-" + m);
	    }
	}
	for (var i = 0; i < methods.length; i++) {
		var method = methods[i];
		Handlebars.registerHelper(method, this.handlebarsHelper);
	}
};


var parseAndNormalizeTemplate = function(templateString) {
	var res = templateString;
	var s = /{{{(.*?)}}}/g;
	reg = new RegExp(s);   
	var result;
	while((result = reg.exec(templateString)) !== null) {
		var item = {
			templatePart : result[0],
			functionName : result[1],
			index:result.index,
			input:result.input
		}
		if (item.functionName[item.functionName.length - 1] != "'"){		
		    res = res.replace(item.templatePart, "{{{" + item.functionName + " ''}}}")
			
		}
	}
	return res;
};

Muenchhausen.prototype.render = function(templateString) {
	var template = parseAndNormalizeTemplate(templateString);
	template = Handlebars.compile(template);
	
	var context = { culture : this.culture, Globalize : Globalize, fake : this.fake };
	var result = template(context);
	return result;
};

module.exports = Muenchhausen;