






var generator = require("creditcard-generator");
console.log(
	generator.GenCC("Mastercard", 1, Math.random)
)

var merchandiseTVSpotText = "{{{date-now 'suffix:this'}}}-{{{date-random 'suffix:format,min:20200901'}}}  {{{date-random}}}";
var Muenchhausen = require("./lib/index.js");
var muenchhausen = new Muenchhausen("de");
var news = muenchhausen.render(merchandiseTVSpotText);
console.log(news);

//console.log(methods);