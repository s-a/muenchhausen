var Benchmark = require("benchmark"); 	// eslint-disable-line max-lines
var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("de-DE");
var faker = require("faker");
faker.locale = "de"; 
var package = require("./../package.json");
var Chance = require("chance"),
chance = new Chance();
  

function systeminfo(done){
	var os = require("os");
	var m = new Muenchhausen("en-GB");
	var si = require("systeminformation");
	si.cpu().then(function(cpu){
		si.versions().then(function(version){
			console.log("# Benchmarks");
			console.log("Tested at " + m.render("$(date.now)"));
			console.log("  ");
			console.log("## Arena");
			console.log("Node.js " + "v" + version.node + " on " + os.platform() + " " + os.arch() + " v" + os.release() + " with " + os.totalmem() + " total memory and");
			console.log(cpu.manufacturer + " " + cpu.brand + " " + cpu.speed + " " + cpu.cores + " cores.");
			console.log("  ");
			console.log("## Gladiators");
			console.log(" - Muenchhausen@" + package.version);
			console.log(" - faker.js@" + package.devDependencies.faker.replace(/\^/, ""));
			console.log(" - Chance.js@" + package.devDependencies.chance.replace(/\^/, ""));
			console.log("  ");
			done();
		}).catch(function(error){ console.error(error) });
	}).catch(function(error){ console.error(error) });
};

function getSymbol(event){
	var symbol1 = ":clock1:"; 
	var symbol2 = ":clock10:"; 
	var symbol3 = ":clock1030:"; 

	var result = null;

	var evt = String(event.target);

	if(evt.indexOf("muenchhausen.") !== -1){
		result = symbol1;		
	}
	if(evt.indexOf("faker.") !== -1){
		result = symbol2;		
	}
	if(evt.indexOf("chance.") !== -1){
		result = symbol3;		
	}

	return result.toLowerCase();
}

function testSuite(functionBundle){

	var suite1 = new Benchmark.Suite();
	suite1
		.add(functionBundle.name1, functionBundle.f1)
		.add(functionBundle.name2, functionBundle.f2)
		.on("cycle", function(event) {
			var symbol = getSymbol(event);
			console.log(symbol + " " + String(event.target) + "  ");
		})
		.on("complete", function() {
			console.log(":+1: " + this.filter("fastest").map("name") + "  ") ;
			console.log("") ;
		});

	if (functionBundle.name3){
		suite1.add(functionBundle.name3, functionBundle.f3);
	}

	suite1.run({ "async": false }); 

	return suite1
}


systeminfo(function(){	// eslint-disable-line max-statements

	testSuite({
		name1 : "muenchhausen.fake.person.lastname",
		f1 : function() {
			muenchhausen.fake.person.lastname({}); 
		},
		name2 : "faker.name.lastName",
		f2 : function() {
			faker.name.lastName();
		},
		name3 : "chance.last",
		f3 : function() {
			chance.last() 
		}
	});  
	
	testSuite({
		name1 : "muenchhausen.fake.person.firstname+muenchhausen.fake.person.lastname",
		f1 : function() {
			muenchhausen.fake.person.firstname({}) + muenchhausen.fake.person.lastname({}); 
		},
		name2 : "faker.name.findName",
		f2 : function() {
			faker.name.findName();
		},
		name3 : "chance.name",
		f3 : function() {
			chance.name();
		}
	});  

	testSuite({
		name1 : "muenchhausen.fake.company.name",
		f1 : function() {
			muenchhausen.fake.company.name({}); 
		},
		name2 : "faker.company.companyName",
		f2 : function() {
			faker.company.companyName(0);
		}
	});  

	testSuite({
		name1 : "muenchhausen.fake.person.firstname",
		f1 : function() {
			muenchhausen.fake.person.firstname({}); 
		},
		name2 : "faker.name.firstName",
		f2 : function() {
			faker.name.firstName();
		},
		name3 : "chance.last",
		f3 : function() {
			chance.last();
		}
	});  

	testSuite({
		name1 : "muenchhausen.fake.random.element (Object)",
		f1 : function() {
			muenchhausen.fake.random.element({one: 1, two: 2, three: 3}); 
		},
		name2 : "faker.random.objectElement",
		f2 : function() {
			faker.random.objectElement({one: 1, two: 2, three: 3});
		}
	}); 

	testSuite({
		name1 : "muenchhausen.fake.random.element (Array)",
		f1 : function() {
			muenchhausen.fake.random.element(["cell","work","home"]); 
		},
		name2 : "faker.random.arrayElement",
		f2 : function() {
			faker.random.arrayElement(["cell","work","home"]);
		},
		name3 : "chance.pickone",
		f3 : function() {
			chance.pickone(["cell","work","home"]);
		}
	}); 

	testSuite({
		name1 : "muenchhausen.fake.boolean.random", 
		f1 : function() {
			muenchhausen.fake.boolean.random({}); 
		},
		name2 : "faker.random.boolean",
		f2 : function() {
			faker.random.boolean();
		},
		name3 : "chance.bool",
		f3 : function() {
			chance.bool();
		}
	});	

	testSuite({
		name1 : "muenchhausen.fake.decimal.random", // == > should be muenchhausen.finance.amount.
		f1 : function() {
			muenchhausen.fake.decimal.random({}); 
		},
		name2 : "faker.finance.amount",
		f2 : function() {
			faker.finance.amount();
		},
		name2 : "chance.floating",
		f2 : function() {
			chance.floating();
		}
	});	

	testSuite({
		name1 : "muenchhausen.fake.number.random",
		f1 : function() {
			muenchhausen.fake.number.random({}); 
		},
		name2 : "faker.random.number",
		f2 : function() {
			faker.random.number();
		},
		name3 : "chance.floating({fixed: 0})",
		f3 : function() {
			chance.floating({fixed: 7})
		}
	});	

	testSuite({
		name1 : "muenchhausen.fake.date.future",
		f1 : function() {
			muenchhausen.render("$(date.future.value)"); 
		},
		name2 : "faker.date.future",
		f2 : function() {
			faker.fake("{{date.future}}");
		}
	});	

	testSuite({
		name1 : "muenchhausen.fake.date.past",
		f1 : function() {
			muenchhausen.render("$(date.past.value)"); 
		},
		name2 : "faker.date.past",
		f2 : function() {
			faker.fake("{{date.past}}");
		}
	});

	testSuite({
		name1 : "muenchhausen.fake.date.random",
		f1 : function() {
			muenchhausen.fake.date.random().value; 
		},
		name2 : "faker.date.future",
		f2 : function() {
			faker.fake.future();
		},
		name3 : "chance.date",
		f3 : function() {
			chance.date()
		}
	});

	testSuite({
		name1 : "muenchhausen.fake.date.month",
		f1 : function() {
			muenchhausen.fake.date.month({}); 
		},
		name2 : "faker.date.month",
		f2 : function() {
			faker.fak.date.month();
		},
		name3 : "chance.month",
		f3 : function() {
			chance.month();
		}
	});

	testSuite({
		name1 : "muenchhausen.fake.date.weekday",
		f1 : function() {
			muenchhausen.render("$(date.weekday)"); 
		},
		name2 : "faker.date.weekday",
		f2 : function() {
			faker.fake("{{date.weekday}}");
		}
	});

	testSuite({
		name1 : "muenchhausen.fake.phone.international",
		f1 : function() {
			muenchhausen.fake.phone.international({}).value;
		},
		name2 : "faker.phone",
		f2 : function() {
			/*var f = */faker.phone.phoneNumberFormat();
		},
		name3 : "chance.phone",
		f3 : function() {
			chance.phone();
		}
	});

	testSuite({
		name1 : "muenchhausen.fake.address.street",
		f1 : function() {
			// var s = muenchhausen.fake.address.random({});
			muenchhausen.fake.address.street({}); 
		},
		name2 : "faker.address.streetName",
		f2 : function() {
			faker.address.streetName();
		},
		name3 : "chance.street",
		f3 : function() {
			chance.street();
		}
	});  

	testSuite({
		name1 : "muenchhausen.fake.address.lon",
		f1 : function() {
			muenchhausen.fake.address.random({}); 
			muenchhausen.fake.address.lon({}); 
		},
		name2 : "faker.address.longitude",
		f2 : function() {
			faker.address.longitude();
		},
		name3 : "chance.latitude",
		f3 : function() {
			chance.longitude();
		}
	});  

	testSuite({
		name1 : "muenchhausen.fake.address.lat",
		f1 : function() {
			muenchhausen.fake.address.random({}); 
			muenchhausen.fake.address.lat({}); 
		},
		name2 : "faker.address.latitude",
		f2 : function() {
			faker.address.latitude();
		},
		name3 : "chance.latitude",
		f3 : function() {
			chance.latitude();
		}
	});  

	testSuite({
		name1 : "muenchhausen.fake.address.postcode",
		f1 : function() {
			muenchhausen.fake.address.random({}); 
			muenchhausen.fake.address.postcode({}); 
		},
		name2 : "faker.address.zipCode",
		f2 : function() {
			faker.address.zipCode();
		},
		name3 : "chance.zip",
		f3 : function() {
			chance.zip();
		}
	});  

	testSuite({
		name1 : "muenchhausen.fake.address.city",
		f1 : function() {
			muenchhausen.fake.address.random({}); 
			muenchhausen.fake.address.city({}); 
		},
		name2 : "faker.address.city",
		f2 : function() {
			faker.address.city();
		},
		name3 : "chance.city",
		f3 : function() {
			chance.city();
		}
	});  
});