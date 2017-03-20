var Benchmark = require("benchmark");
var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("en");
var faker = require("faker");
faker.locale = "en"; 

function systeminfo(done){
	var os = require("os");
	var m = new Muenchhausen("en");
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
		name1 : "muenchhausen.date.past",
		f1 : function() {
			muenchhausen.render("$(date.past.value)"); 
		},
		name2 : "faker.date.past",
		f2 : function() {
			faker.fake("{{date.past}}");
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

	testSuite({
		name1 : "muenchhausen.date.month",
		f1 : function() {
			muenchhausen.render("$(date.month)"); 
		},
		name2 : "faker.date.month",
		f2 : function() {
			faker.fake("{{date.month}}");
		}
	});

	testSuite({
		name1 : "muenchhausen.date.weekday",
		f1 : function() {
			muenchhausen.render("$(date.weekday)"); 
		},
		name2 : "faker.date.weekday",
		f2 : function() {
			faker.fake("{{date.weekday}}");
		}
	});

});