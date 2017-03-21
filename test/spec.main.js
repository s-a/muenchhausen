"use strict";

var assert = require("assert");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("de-DE");

describe("muenchhausen main rendering", function () {
  it("should render random data!", function () {
    var merchandiseTVSpotText = "$(date.now.text suffix:this)-$(date.random.value suffix:format,min:20200901)  $(date.random)";
    /*var news = */muenchhausen.render(merchandiseTVSpotText);
    //console.log(news);
    assert(true, "we expected this package author to add actual unit tests.");
  });
});
