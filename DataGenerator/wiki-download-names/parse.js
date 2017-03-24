var fs = require("fs");

var index = null;
  
var map = function map(line) { 

	if (index === null){
		index = {};
		for (var i = 0; i < line.length; i++) {
			// var cell = (line[i]).replace(/"/g, "").trim()
			index[line[i].trim()] = i;
		}
		return null;
	} else {
		var item = {
			name : line[index.CompanyName].replace(/"/g, "").trim(),
			RegAddressPostCode : line[index["RegAddress.PostCode"]].replace(/"/g, "").trim(),
			RegAddressCareOf : line[index["RegAddress.CareOf"]].replace(/"/g, "").trim(),
			RegAddressPOBox : line[index["RegAddress.POBox"]].replace(/"/g, "").trim(),
			RegAddressAddressLine1 : line[index["RegAddress.AddressLine1"]].replace(/"/g, "").trim(),
			RegAddressPostTown : line[index["RegAddress.PostTown"]].replace(/"/g, "").trim(),
			RegAddressCounty : line[index["RegAddress.County"]].replace(/"/g, "").trim(),
			RegAddressCountry : line[index["RegAddress.Country"]].replace(/"/g, "").trim(),
			RegAddressPostCode : line[index["RegAddress.PostCode"]].replace(/"/g, "").trim(),
			CompanyCategory : line[index["CompanyCategory"]].replace(/"/g, "").trim()
		};  
		return item; 
	}
}
 
function per(max, current){
  return ((current / max) * 100).toFixed(2);
}

function formatBytes(bytes,decimals) {
   if(bytes == 0) return "0 Bytes";
   var k = 1000,
       dm = decimals + 1 || 3,
       sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
       i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}


var parseFile = function parseFile(filename, done) {

	var stats = fs.statSync(filename);
	var fileSizeInBytes = stats.size;


	var LineByLineReader = require("line-by-line"),
    lr = new LineByLineReader(filename);
	var names = {};
	var len = 0;
	var lll = 0;


	lr.on("error", function (err) {
		console.log(err);
	});

	lr.on("line", function (line) {

		len += line.length;
		lll++;


		var item = map(line.split(","));
		if (item){
			var itemValid = !/^\d.*\s/.test(item.name);
			if (itemValid){

				if(lll % 15000 === 0){
					fs.appendFile("./company.json", JSON.stringify(item.name) + ",\n", function (err) {
						if (err) throw err;
							console.log("parsed ", lll, "lines", formatBytes(len, 1) + " of " + formatBytes(fileSizeInBytes, 1), per(fileSizeInBytes, len) + "%");
					});
				}
			}
		}
	});

	lr.on("end", function () {
		done(names);
	});

}

var filename = "./BasicCompanyDataAsOneFile-2017-03-06.csv" ;
parseFile(filename, function () {
	console.log("done")
});