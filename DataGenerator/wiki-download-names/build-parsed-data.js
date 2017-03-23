var fs = require("fs");
var path = require("path");
var glob = require("glob");

function eachJsonFile(handler) {
	glob("./names/**/*.json", function(a,files){
		for (var i = 0; i < files.length; i++) {
			var file = files[i];
			var text = fs.readFileSync(file).toString().split(",");
			text.pop();
			text = "[" + text.join(", ") + "]";
			var json  = JSON.parse(text);
			handler(json, file)
		}
	})
}

var eachDirPart = function (dir, handler){
	dir.split("")
}

eachJsonFile(function (obj, filename) {
	var newFilename = path.join("..", "..", "lib", "i18n", filename.toLowerCase());
	newFilename = path.resolve(newFilename);
	var dir = path.dirname(newFilename);
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}
	console.log(newFilename);
	fs.writeFileSync(newFilename, JSON.stringify(obj));
})