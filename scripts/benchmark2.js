var Benchmark = require("benchmark");
var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("en-GB");
var faker = require("faker");
faker.locale = "en"; 

function systeminfo(done){
	var os = require("os");
	var m = new Muenchhausen("en-GB");
	var si = require("systeminformation");
	si.cpu().then(function(cpu){
		si.versions().then(function(version){
			console.log("# Benchmark");
			console.log("");
			console.log("Tested at " + m.render("$(date.now format:{ datetime: full })"));
			console.log(" with node " + "v" + version.node + " on " + os.platform() + " " + os.arch() + " v" + os.release() + " with " + os.totalmem() + " total memory and");
			console.log(" " + cpu.manufacturer + " " + cpu.brand + " " + cpu.speed + " " + cpu.cores + " cores");
			console.log("");
			done();
		}).catch(function(error){ console.error(error) });
	}).catch(function(error){ console.error(error) });
};

function testSuite(functionBundle){

	var suite1 = new Benchmark.Suite();
	suite1
		.add(functionBundle.name1, functionBundle.f1)
		.add(functionBundle.name2, functionBundle.f2)
		.on("cycle", function(event) {
			console.log("- `" + String(event.target) + "`  ");
		})
		.on("complete", function() {
			console.log("  - Fastest is `" + this.filter("fastest").map("name") + "`  ") ;
			console.log("  ");
		})
		.run({ "async": false }); 

	return suite1
}


systeminfo(function(){

	testSuite({
		name1 : "muenchhausen.random.element",
		f1 : function() {
			muenchhausen.fake.random.element(["cell","work","home"]); 
		},
		name2 : "faker.random.arrayElement",
		f2 : function() {
			faker.random.arrayElement(["cell","work","home"]); //returns "work"
		}
	}); 


});