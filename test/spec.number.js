"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("de-DE");

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
  it("should render a number between min and max where min is zero!", function () {
    var merchandiseTVSpotText = "$(number.random.value min:0,max:200)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    var i = parseInt(news);
    i.should.above(0);
    i.should.below(200);
  });
  it("should render a number between min and max where max is zero!", function () {
    var merchandiseTVSpotText = "$(number.random.value min:-200,max:0)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    var i = parseInt(news);
    i.should.above(-200);
    i.should.below(0);
  });
});
