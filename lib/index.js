var Globalize = require( "globalize" );
Globalize.load( require( "cldr-data" ).entireSupplemental() );

var Handlebars = require("handlebars");


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var Fake = require("./fake/");

 
/**
 * Constructor of a fake library.
 * @param {String} culture a culture string like "de" or "en"
 */
var Muenchhausen = function(culture) {
	var c = (culture || "en");
	Globalize.load( require( "cldr-data" ).entireMainFor( c ) );
	this.culture = c;
	this.initialize();
	return this;
};

Muenchhausen.prototype.handlebarsHelper = function(context, options) {
	var namespace = options.name.split("-");
	
	f1 = capitalizeFirstLetter(namespace[0]);
	f2 = namespace[1];
	f3 = namespace[2] || "text";
	var fn = new this.fake[f1](options);
	var result = fn[f2].apply(this, arguments);
	return result[f3];
};

Muenchhausen.prototype.eachFunction = function eachFunction(parentObject, handle){
	for (var m in parentObject) {
		if (typeof parentObject[m] == "function") {
			handle(m, parentObject[m]); 
		}
	} 
};

 
Muenchhausen.prototype.eachModuleFunction = function eachModuleFunction(parentObject, context, handle){
	var self = this;
	this.eachFunction(parentObject, function(mn, Mod){
		var fun = new Mod(context, context.options);
		self.eachFunction(fun, function(fn, f){
			handle(mn + "." + fn, f)
		});
	}); 
};

Muenchhausen.prototype.initialize = function() {
	this.fake = new Fake();
	var methods = [];
	for (var m in this.fake.date) {
		if (typeof this.fake.date[m] == "function") {
			methods.push("date-" + m);
			methods.push("date-" + m + "-text");
			methods.push("date-" + m + "-value");
		}
	}
	for (var i = 0; i < methods.length; i++) {
		var method = methods[i];
		Handlebars.registerHelper(method, this.handlebarsHelper);
	}
};

var parseAndNormalizeTemplateParameters = function(templateString) {
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
			res = res.replace(item.templatePart, "{{{" + item.functionName + " ''}}}");	
		}
	}
	return res;
};

var parseAndNormalizeTemplateFunctionNamespaces = function(templateString) {
	var res = templateString;
	var s = /{{{(.*?)\s/g;
	reg = new RegExp(s);   
	var result;
	while((result = reg.exec(templateString)) !== null) {
		var item = {
			templatePart : result[0],
			functionName : result[1],
			index:result.index,
			input:result.input
		}
		res = res.replace("{{{" + item.functionName, "{{{" + item.functionName.replace(/\./g, "-"));	
	}
	return res;
};

/**
 * Render random fake data based on template using configuration options.
 * @param {String} templateString a template string. For example `"now:{{{date-now 'suffix:am'}}}\trandom:{{{date-random 'suffix:format,min:20200901'}}}\trandom: {{{date-random}}}"`
 */
Muenchhausen.prototype.render = function(templateString) {
	var template = parseAndNormalizeTemplateParameters(templateString);
	template = parseAndNormalizeTemplateFunctionNamespaces(template);
	template = Handlebars.compile(template);
	
	var context = { culture : this.culture, Globalize : Globalize, fake : this.fake };
	var result = template(context);
	return result;
};

module.exports = Muenchhausen;