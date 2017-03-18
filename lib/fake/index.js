"use strict";


/**
 * Constructor of the fake helper modules library.
 */
 var Fake = function() {
	this.Date = require("./date");
	this.date = new this.Date();	
	this.Emoji = require("./emoji");
	this.emoji = new this.Emoji();
	this.Number = require("./number");
	this.number = new this.Number();
	return this;
};




module.exports = Fake;