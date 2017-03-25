var fs = require("fs");
 
var map = function map(strline) { 
	var line = strline.split(",");
	var item = {
		"lon" : line[0],
		"lat" : line[1],
		"number" : line[2],
		"street" : line[3],
		"unit" : line[4],
		"city" : line[5],
		"district" : line[6],
		"region" : line[7],
		"postcode" : line[8]
	};  
	return item;  
}
 
function per(max, current){
  return ((current / max) * 100).toFixed(2);
}

var parse = function(items){ // eslint-disable-line no-unused-vars
	console.log("parse");
	var result = [];
	var i = 0;
	while (i < items.length){
		i = i + 55;
		if (items[i]){
			var adr = map(items[i]);
			if (adr){
				if (adr.district !== "" && adr.lat !== "" && adr.lon !== "" && adr.city !== "" && adr.number !== "" && adr.street !== "" && adr.postcode !== ""){
					result.push(adr);
					if (result.length > 2000){ // eslint-disable-line max-depth
						break;
					}
				}
			}
		}
	} 
	return result;
}

var parseRelaxed = function(items){
	console.log("parseRelaxed");
	var result = [];
	var i = 0;
	while (i < items.length){
		i = i + 1;
		if (items[i]){
			var adr = map(items[i]);
			if (adr.lat !== "" && adr.lon !== "" && adr.street !== "" ){
				result.push(adr);
				if (result.length > 2000){
					break;
				}
			}
		}
	} 
	return result;
}

function randomLine(filename) {
	var result = [];
 
	var filecontent = fs.readFileSync(filename);
	if (filecontent){
		try{
			var text =  filecontent.toString();
			var items = text.split("\n");
			//result.push.apply(result, parse(items))
				result.push.apply(result, parseRelaxed(items))
		/*	if (result.length < 1000){
			}*/
		} catch(e){
			// sometime toString fails
		}
	}
	return result;
}
 
var glob = require("glob");
 
var counter = {};
 
glob("c:\\temp\\openaddr-collected-global\\**\\*.csv", function(err, files){ 
	for (var i = files.length - 1; i >= 0; i--) {
		var file = files[i];
		console.log(lng, per(i, file.length) + "%", counter[lng] || 0);
		var lng = file.split("/")[3];
		if ((counter[lng] || 0) <= 1000){
			var adrs = randomLine(file);
			for(var a = 0; a < adrs.length; a++){
				var adr = adrs[a];
				if (adr.city !== ""){ // adr found?
					//console.log(lng,  adr)
					counter[lng] = (counter[lng] || 0) + 1;
					fs.appendFileSync("./adr/"  + lng + ".json", JSON.stringify(adr) + ",\n");
				}
			}
		}
	}
});