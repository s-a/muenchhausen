"use strict";


/**
 * Constructor of the fake helper modules library.
 */
 var Fake = function() {
	this.Date = require("./date");
	this.date = new this.Date();	
	this.Emoji = require("./emoji");
	this.emoji = new this.Emoji();
	return this;
};




module.exports = Fake;