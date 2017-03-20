var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;
var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("de");
var faker = require("faker");
faker.locale = "de"; 

function systeminfo(done){
	var os = require('os');
	var m = new Muenchhausen("en");
	var si = require('systeminformation');
	si.cpu().then(function(cpu){
		si.versions().then(function(version){
			console.log("time: " + m.render("$(date.now format:{ datetime: full })"));
			console.log("node: v" + version.node + " on " + os.platform() + " " + os.arch() + " v" + os.release() + " with " + os.totalmem() + " total memory.");
			console.log("cpu: " + cpu.manufacturer + " " + cpu.brand + " speed: " + cpu.speed + " cores:" + cpu.cores);
			console.log("");
			done();
		}).catch(error => console.error(error));
	}).catch(error => console.error(error))
};

systeminfo(function(){
	suite
		.add("muenchhausen.date.future", function() {
			muenchhausen.render("$(date.future.value)"); 
		})
		.add("faker.date.future", function() {
			faker.fake("{{date.future}}");
		})
	.on("cycle", function(event) {
		console.log(String(event.target));
	})
	.on("complete", function() {
	  	console.log("Fastest is " + this.filter("fastest").map("name"));
		console.log("");
	})
	.run({ "async": true }); 
});