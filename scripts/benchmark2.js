var Benchmark = require("benchmark");
var Muenchhausen = require("./../lib");
var muenchhausen = new Muenchhausen("en-GB");
var faker = require("faker");
faker.locale = "en"; 
 
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



testSuite({
	name1 : "muenchhausen.fake.address.street",
	f1 : function() {
		// var s = muenchhausen.fake.address.random({});
		muenchhausen.fake.address.street({}); 
	},
	name2 : "faker.address.streetName",
	f2 : function() {
		faker.address.streetName();
	}
});  
/*
	testSuite({
		name1 : "muenchhausen.fake.address.lon",
		f1 : function() {
			muenchhausen.fake.address.random({}); 
			muenchhausen.fake.address.lon({}); 
		},
		name2 : "faker.address.longitude",
		f2 : function() {
			faker.address.longitude();
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
		}
	});  
 */
	