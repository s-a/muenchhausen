"use strict";

function randomLine (filename, end) {
	var currentLine = 0;
	var LineByLineReader = require("line-by-line"),
    lr = new LineByLineReader(filename);
    var randomLineNumber = 0;
	var result;

	lr.on("error", function (err) {
		end(err);
	});

	lr.on("line", function (line) {
		currentLine++;
		if (randomLineNumber === 0){
			var lineNumbers = parseInt(line, 10);
			if (lineNumbers > 5000){
				lineNumbers = 5000;
			}
			randomLineNumber = Math.floor(Math.random() * lineNumbers) + 1; // max 5000 fake date set lines
		}
		if (currentLine === randomLineNumber){
			//console.log(currentLine, line);
			//lr.pause()
			result = line;
			lr.close();		
		}
	});

	lr.on("end", function(){
		end(result);
	});
} 

module.exports = randomLine;