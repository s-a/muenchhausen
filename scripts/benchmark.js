var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;

var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("de");

var faker = require('faker');
faker.locale = "de";



function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
var min = new Date();
var m = min.getFullYear().toString() + pad(min.getMonth().toString(), 2) + pad(min.getDate(), 2);

console.log(
	faker.fake("{{date.future}}")
)

// add tests
suite
	.add('muenchhausen.date.future', function() {
	  	muenchhausen.render("{{{date.future.value}}}");
	})
	.add('faker.date.future', function() {

	  	faker.fake("{{date.future}}");
	})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
 