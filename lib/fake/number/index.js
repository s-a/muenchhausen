"use strict";

 
function MNumber(context, options) {
    MNumber.super_.apply(this, arguments);
    return this; 
}

require("./../../extension/").extend(MNumber);
 
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};


function randomNumber(setup){
    var startDate;
    var endDate;
  
    if (setup.min){
      startDate = parseInt(setup.min.toString());
    } else {
      startDate = Number.MIN_SAFE_INTEGER;
    }
    startDate += Math.PI;
    if (setup.max){
      endDate =  parseInt(setup.max.toString());
    } else {
      endDate =  Number.MAX_SAFE_INTEGER;
    }
    endDate -= Math.PI;

    return generateRandomNumber(startDate, endDate);
}

/**
 * random number based on template using configuration options. For more details of different format see https://github.com/globalizejs/globalize/blob/master/doc/api/number/number-formatter.md
 * min and max are in format : `yyyymmddhhssnn` 
 * @param {String} templateString a template string. For example `rnd:{{{date.random 'min : 10200901, max : 20200901, format : { skeleton: GyMMMEdhms }'}}}`
 */
MNumber.prototype.random = function random(context, options) {
	/*var setup = {};
  if (typeof arguments[0] === "string"){
    setup = RJSON.parse("{" + (arguments[0] || "") + "}");
  }*/
  var setup = this._argv.apply(this, arguments);
	var number = randomNumber(setup);
  var culture = this._culture(options);
  var str = options.data.root.Globalize(culture).formatNumber(number, setup.format);
  var result = {
    value : number,
    text : str
  };
	return result;
};

module.exports = MNumber;