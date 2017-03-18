"use strict";

module.exports.extend = function(subClass){
    var FakeExtension = require("./base-fake-extension.js");
    var fakeExtension = new FakeExtension();
    fakeExtension._assign(subClass);
};