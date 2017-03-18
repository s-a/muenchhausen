"use strict";

/**
 * Extends your custom extension with the base FakeExtension. Useful to write your own extensions.  
 * *example:*  
 * ```javascript 
 * function Currency(context, options) {
 *    Currency.super_.apply(this, arguments);
 *    return this; 
 * }
 * require("./../../extension/").extend(Currency);
 * ```
 * @param {Object} subClass Your custom extension Object"`
 */
module.exports.extend = function(subClass){
    var FakeExtension = require("./base.js");
    var fakeExtension = new FakeExtension();
    fakeExtension._assign(subClass);
};