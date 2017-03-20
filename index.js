





/*
var generator = require("creditcard-generator");
console.log(
	generator.GenCC("Mastercard", 1, Math.random)
)
*/
//var merchandiseTVSpotText = "$(date.now.value suffix : this)-$(date.random suffix : format, min : 20200901)  $(date.random)";
var merchandiseTVSpotText = "$(date.week)";
var Muenchhausen = require("./lib/index.js");
var muenchhausen = new Muenchhausen("en");
//var news = muenchhausen.render(merchandiseTVSpotText);
//
console.log(muenchhausen.fake.date.now().text());
console.log(muenchhausen.fake.date.weekday().text());
//console.log(news);
 