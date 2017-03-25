var fs = require("fs");
var path = require("path");
 

var glob = require("glob");
 

glob("./adr/**/*.json", function(err, files){ 
	for (var i = files.length - 1; i >= 0; i--) {
		var file = path.resolve(files[i]);
		var content = fs.readFileSync(file).toString().split("\n");
		var lastLine = content[content.length - 2].split(",");
		lastLine.pop();
		content[content.length - 2] = lastLine.join(",");
		var txt = "[" + content.join("\n") + "]";
		var addressList = JSON.parse(txt);
		var cleanAddressList = [];
		for (var l = 0; (l < addressList.length); l++) {
			var adr = addressList[l];
			delete adr.region;
			delete adr.unit;
			cleanAddressList.push(adr);
			if(cleanAddressList.length === 1000){
				break;
			}
		}
		var fn = "./../../lib/i18n/address/"  + path.basename(file);
		console.log(fn, cleanAddressList.length);
		fs.writeFileSync(fn, JSON.stringify(cleanAddressList, null, "\t"));
	}
});