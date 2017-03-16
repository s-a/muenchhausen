var Globalize = require( "globalize" );
Globalize.load( require( "cldr-data" ).entireSupplemental() );


var parseDate = function(dateString) {
	// body...
};


var Muenchhausen = function(culture) {
	Globalize.load( require( "cldr-data" ).entireMainFor( culture ) );
	this.culture = culture;
	return this;
};


Muenchhausen.prototype.parseTemplate = function(templateString) {
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

var Handlebars = require("handlebars");





function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var Fake = function() {
	this.Date = require("./date.js");
	this.date = new this.Date();
	return this;
};

var fake = new Fake();

var methods = [];
for (var m in fake.date) {
    if (typeof fake.date[m] == "function") {
        methods.push("date-" + m);
    }
}

var helper = function(context, options) {
	var namespace = options.name.split("-");
	
	f1 = capitalizeFirstLetter(namespace[0]);
	f2 = namespace[1];
	var fn = new fake[f1](options);
	var result = fn[f2].apply(this, arguments);
	return result;
}

for (var i = 0; i < methods.length; i++) {
	var method = methods[i];
	Handlebars.registerHelper(method, helper);
}



Muenchhausen.prototype.fake = function(templateString) {
	var template = muenchhausen.parseTemplate(templateString);
	template = Handlebars.compile(template);
	
	var context = { culture : this.culture};
	var result = template(context);
	return result;
};


var generator = require('creditcard-generator');
console.log(
	generator.GenCC("Mastercard", 1, Math.random)
)

var muenchhausen = new Muenchhausen("de");
var merchandiseTVSpotText = "{{{date-now 'suffix:this'}}}-{{{date-random 'suffix:format,min:20200901'}}}  {{{date-random}}}";
var news = muenchhausen.fake(merchandiseTVSpotText);
console.log(news);

//console.log(methods);