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
	this.Phone = require("./phone");
	this.phone = new this.Phone(setup);
	this.Time = require("./time");
	this.time = new this.Time(setup);	
	this.Decimal = require("./decimal");
	this.decimal = new this.Decimal(setup);
	return this;
};




module.exports = Fake;