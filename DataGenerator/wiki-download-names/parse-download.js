var fs = require("fs");

var getName = function (line) {
	var s = /\[\[(.*?)\]\]/;
	var reg = new RegExp(s);   
	var result;
	while((result = reg.exec(line)) !== null) {
		var res = (result[1].split("(")[0].split("|")[0].trim());
		return res;
	}
}

var getCulture = function (line) {
	var s = /!---(.*?)---&gt;/;
	var reg = new RegExp(s);   
	var result;
	while((result = reg.exec(line)) !== null) {
		return result[1];
	}
}


var getGender = function (line) {
	var result = "male";
	if (line.indexOf("♀♂") !== -1){
		result = "unisex";
	} else {
		if (line.indexOf("♂") !== -1){
			result = "male";
		}
		if (line.indexOf("♀") !== -1){
			result = "female";
		}
	}
	return result;
}

var map = function map(line) {
	var item = {
		name : getName(line),
		gender : getGender(line),
		culture : getCulture(line)
	};
	return item;
}

var nameCount = 0;

var assign = function assign(item, gender, culture) {
/*	if(item.name === "Stephan"){
		console.log(item, gender, culture);
	}*/
	if (item.name && item.gender && item.culture && item.culture.length <= 3){
		delete item.culture;
		delete item.gender;
		var dir = "./names/" + gender + "/";
		if (!fs.existsSync(dir)){
			fs.mkdirSync(dir);
		}
		var fn = dir + culture + ".json";
		var exists = fs.existsSync(fn) && (fs.readFileSync(fn).toString().indexOf(item.name) !== -1);
 
		if( !exists ){
			fs.appendFileSync(fn, JSON.stringify(item.name) + ",\n");
			nameCount++;
			if(nameCount % 1000 === 0){
				console.log(nameCount + ". name found ... Congrats : " + item.name + " from " + culture + "!");

			}
		};
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
    console.log("parse ", filename);
	var len = 0;
	var lll = 0;


	lr.on("error", function (err) {
		console.log(err);
	});

	lr.on("line", function (line) {

		len += line.length;
		lll++;

		if(lll % 100000 === 0){
			console.log("parsed ", lll, "lines", formatBytes(len, 1) + " of " + formatBytes(fileSizeInBytes, 1), per(fileSizeInBytes, len) + "%");
		}
		if(len < 17900000) return;


		// 'line' contains the current line without the trailing newline character.
		var item = map(line);

		if (!item.culture){
			item.culture = "yyy";
		}
		if (!item.culture === "?"){
			item.culture = "zzz";
		}
		var gender = item.gender;
		var cultures = item.culture.split(",").join(" ").split(" ");
		// console.log(cultures)
		for (var a = cultures.length - 1; a >= 0; a--) {
			var culture = cultures[a].trim();
			if (culture !== ""){
				item.culture = cultures[a]; // was deleted while save
				item.gender = gender;// was deleted while save
				assign(item, item.gender, culture);
			}
		}
	});

	lr.on("end", function () {
		done(names);
	});

}

var filename = "./names.xml" ;
parseFile(filename)
// https://de.wikipedia.org/w/index.php?title=Spezial:Exportieren&history=0&action=submit&pages=Liste%20von%20Vornamen/A
