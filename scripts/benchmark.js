var Benchmark = require("benchmark");
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

function testSuite(functionBundle){

	var suite1 = new Benchmark.Suite();
	suite1
		.add(functionBundle.name1, functionBundle.f1)
		.add(functionBundle.name2, functionBundle.f2)
		.on("cycle", function(event) {
			console.log(String(event.target));
		})
		.on("complete", function() {
		  	console.log("Fastest is " + this.filter("fastest").map("name"));
			console.log("");
		})
		.run({ "async": false }); 

	return suite1
}

systeminfo(function(){

	testSuite({
		name1 : "muenchhausen.date.future",
		f1 : function() {
			muenchhausen.render("$(date.future.value)"); 
		},
		name2 : "faker.date.future",
		f2 : function() {
			faker.fake("{{date.future}}");
		}
	});	

	testSuite({
		name1 : "muenchhausen.date.random",
		f1 : function() {
			muenchhausen.render("$(date.random.value)"); 
		},
		name2 : "faker.date.future",
		f2 : function() {
			faker.fake("{{date.future}}");
		}
	});

});