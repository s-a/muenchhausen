var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;

var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("de");

var faker = require("faker");
faker.locale = "de"; 

console.log(
	faker.fake("{{date.future}}")
)

// add tests
suite
	.add("muenchhausen.date.future", function() {
		muenchhausen.render("{{{date.future.value}}}");
	})
	.add("faker.date.future", function() {

		faker.fake("{{date.future}}");
	})
// add listeners
.on("cycle", function(event) {
  console.log(String(event.target));
})
.on("complete", function() {
  console.log("Fastest is " + this.filter("fastest").map("name"));
})
// run async
.run({ "async": true });
 