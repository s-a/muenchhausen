"use strict";

var assert = require("assert");
var Muenchhausen = require("../lib");

describe("muenchhausen", function () {
  it("should have unit test!", function () {

    var muenchhausen = new Muenchhausen("de");

    var merchandiseTVSpotText = "{{{date.now.text suffix:this}}}-{{{date.random.value suffix:format,min:20200901}}}  {{{date.random}}}";
    var news = muenchhausen.render(merchandiseTVSpotText);
    //console.log(news);

    assert(true, "we expected this package author to add actual unit tests.");
  });
});
