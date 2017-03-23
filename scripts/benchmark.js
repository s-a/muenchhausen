var Benchmark = require("benchmark");
var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("de-DE");
var faker = require("faker");
faker.locale = "de"; 
var package = require("./../package.json");
function systeminfo(done){
	var os = require("os");
	var m = new Muenchhausen("en-GB");
	var si = require("systeminformation");
	si.cpu().then(function(cpu){
		si.versions().then(function(version){
			console.log("# Benchmark");
			console.log("  ");
			console.log("Tested at " + m.render("$(date.now)"));
			console.log(" with node " + "v" + version.node + " on " + os.platform() + " " + os.arch() + " v" + os.release() + " with " + os.totalmem() + " total memory and");
			console.log(" " + cpu.manufacturer + " " + cpu.brand + " " + cpu.speed + " " + cpu.cores + " cores.");
			console.log("  ");
			console.log("## Versions");
			console.log(" - Muenchhausen " + package.version);
			console.log(" - faker.js " + package.devDependencies.faker);
			console.log("  ");
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
			var symbol;
			if(String(event.target).indexOf("muenchhausen.") === -1){
				symbol = ":clock1:";
			} else {
				symbol = ":clock10:";
			}
			console.log(symbol + " " + String(event.target) + "  ");
		})
		.on("complete", function() {
			console.log("" + this.filter("fastest").map("name") + "  ") ;
			console.log("") ;
			console.log("") ;
		})
		.run({ "async": false }); 


	return suite1
}


systeminfo(function(){

	testSuite({
		name1 : "muenchhausen.fake.person.firstname",
		f1 : function() {
			muenchhausen.fake.person.firstname({}); 
		},
		name2 : "faker.name.firstName",
		f2 : function() {
			faker.name.firstName();
		}
	});  
	


	testSuite({
		name1 : "muenchhausen.random.element (Object)",
		f1 : function() {
			muenchhausen.fake.random.element({one: 1, two: 2, three: 3}); 
		},
		name2 : "faker.random.objectElement",
		f2 : function() {
			faker.random.objectElement({one: 1, two: 2, three: 3});
		}
	}); 

	testSuite({
		name1 : "muenchhausen.random.element (Array)",
		f1 : function() {
			muenchhausen.fake.random.element(["cell","work","home"]); 
		},
		name2 : "faker.random.arrayElement",
		f2 : function() {
			faker.random.arrayElement(["cell","work","home"]);
		}
	}); 

	testSuite({
		name1 : "muenchhausen.boolean.random", 
		f1 : function() {
			muenchhausen.render("$(boolean.random)"); 
		},
		name2 : "faker.random.boolean",
		f2 : function() {
			faker.fake("{{random.boolean}}");
		}
	});	

	testSuite({
		name1 : "muenchhausen.decimal.random", // == > should be muenchhausen.finance.amount.
		f1 : function() {
			muenchhausen.render("$(decimal.random)"); 
		},
		name2 : "faker.finance.amount",
		f2 : function() {
			faker.fake("{{finance.amount}}");
		}
	});	

	testSuite({
		name1 : "muenchhausen.number.random",
		f1 : function() {
			muenchhausen.render("$(number.random)"); 
		},
		name2 : "faker.random.number",
		f2 : function() {
			faker.fake("{{random.number}}");
		}
	});	

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

	testSuite({
		name1 : "muenchhausen.phone.international",
		f1 : function() {
			muenchhausen.fake.phone.international({}).value;
		},
		name2 : "faker.phone",
		f2 : function() {
			/*var f = */faker.phone.phoneNumberFormat();
		}
	});

});