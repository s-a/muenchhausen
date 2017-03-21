"use strict";

 /*
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
*/
var Fake = require("./fake/");

/**
 * Constructor of a fake library.
 * @param {String} culture a culture string like "de-DE" or "en-GB". All available cultures are listed in https://github.com/s-a/muenchhausen/blob/master/lib/cultures.json
 */
var Muenchhausen = function(culture) {
	var c = (culture);
	this.culture = c;
	this.initialize();
	return this;
};

Muenchhausen.prototype.eachFunction = function eachFunction(parentObject, handle){
	for (var m in parentObject) {
		if (typeof parentObject[m] == "function") {
			handle(m, parentObject[m].bind(parentObject)); 
		}
	} 
};

 
Muenchhausen.prototype.eachModuleFunction = function eachModuleFunction(parentObject, context, handle){
	var self = this;
	this.eachFunction(parentObject, function(mn, Mod){
		var fun = new Mod({culture : self.culture});
		self.eachFunction(fun, function(fn, f){
			if (fn[0] !== "_"){
				handle(mn + "." + fn, f)
			}
		});
	}); 
};

Muenchhausen.prototype.initialize = function() {
	this.fake = new Fake({culture:this.culture}); 
};
 
 
function parse(str) {
	var RJSON = require( "relaxed-json" );
	return RJSON.parse(str);
}

var parsedResultToItem = function(result){
	var item = {
		templatePart : result[0],
		functionCall : result[1],
		index:result.index,
		input:result.input
	}

	item.functionParms = result[1].split(" ");
	item.functionName = item.functionParms[0];
	item.functionParms.shift();
	item.functionParms = item.functionParms.join(" ");
	return item;
}

Muenchhausen.prototype.processTemplateParameters = function processTemplateParameters(templateString) {
	var res = templateString;
	var s = /\$\((.*?)\)/g;
	var reg = new RegExp(s);   
	var result;
	while((result = reg.exec(templateString)) !== null) {
		var item = parsedResultToItem(result);
			
		var namespace = item.functionName.split(".");
		var parms = (item.functionParms.trim() === "" ? {} : parse("{" + (item.functionParms) + "}"));
		parms.culture = this.culture;
		var lastFn = namespace[namespace.length - 1];
		var fresult;

		if (!this.fake[namespace[0]] || !this.fake[namespace[0]][namespace[1]]){
			throw new Error("E_FAKE_METHOD_NOT_FOUND");
		}

		if (lastFn === "value"){
			fresult = this.fake[namespace[0]][namespace[1]](parms).value;
		} else {
			fresult = this.fake[namespace[0]][namespace[1]](parms).text();
		}
		res = res.replace(item.templatePart, fresult)
	}
	return res;
};


/**
 * Render random fake data based on template using configuration options.
 * @param {String} templateString a template string. For example `"now:$(date-now suffix:am)\trandom:$(date-random suffix:format,min:20200901)\trandom: $(date-random)"`
 */
Muenchhausen.prototype.render = function render(templateString) {
	var result = this.processTemplateParameters(templateString);
	return result;
};

module.exports = Muenchhausen;
