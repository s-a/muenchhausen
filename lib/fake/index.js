"use strict";


/**
 * Constructor of the fake helper modules library.
 */
 var Fake = function(setup) {
	this.Date = require("./date");
	this.date = new this.Date(setup);	
	this.Emoji = require("./emoji");
	this.emoji = new this.Emoji(setup);
	this.Number = require("./number");
	this.number = new this.Number(setup);
	this.Phonenumber = require("./phonenumber");
	this.phonenumber = new this.Phonenumber(setup);


	return this;
};




module.exports = Fake;