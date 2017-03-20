"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("de");

describe("muenchhausen number", function () {
  it("should render a number!", function () {
    var merchandiseTVSpotText = "$(number.random)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    news.length.should.above(0);
  }); 
  it("should render a number between 100 and 200!", function () {
    var merchandiseTVSpotText = "$(number.random.value min:100,max:200)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    var i = parseInt(news);
    i.should.above(100);
    i.should.below(200);
  }); 
});
