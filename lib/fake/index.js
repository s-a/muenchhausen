"use strict";


/**
 * Constructor of the fake helper modules library.
 */
 // eslint-disable-next-line max-statements
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
	this.Boolean = require("./boolean");
	this.boolean = new this.Boolean(setup);
	this.Random = require("./random");
	this.random = new this.Random(setup);
	this.Person = require("./person");
	this.person = new this.Person(setup);
	this.Company = require("./company");
	this.company = new this.Company(setup);
	this.Address = require("./address");
	this.address = new this.Address(setup);
	return this;
};




module.exports = Fake;