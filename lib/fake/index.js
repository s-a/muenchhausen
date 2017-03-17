/**
 * Constructor of the fake helper modules library.
 */
 var Fake = function() {
	this.Date = require("./date");
	this.date = new this.Date();
	return this;
};




module.exports = Fake;