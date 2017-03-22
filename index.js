/*var s = new Date(parseInt(496407600)*1000).toLocaleDateString('de', {
day: '2-digit',
month: '2-digit',
year: 'numeric'
}).replace(/\./g, '/');
*/

/*
var generator = require("creditcard-generator");
console.log(
	generator.GenCC("Mastercard", 1, Math.random)
)
*/
//var merchandiseTVSpotText = "$(date.now.value suffix : this)-$(date.random suffix : format, min : 20200901)  $(date.random)";
//var merchandiseTVSpotText = "$(date.week)";
var Muenchhausen = require("./lib/index.js");
var muenchhausen = new Muenchhausen("en-GB");
//var news = muenchhausen.render(merchandiseTVSpotText);
//
console.log(muenchhausen.fake.date.now({}).text());
console.log(muenchhausen.fake.date.weekday().text());
console.log(muenchhausen.fake.number.random({}).text());
console.log(muenchhausen.fake.decimal.random({decimalplaces:3,min:10,max:30}).text());