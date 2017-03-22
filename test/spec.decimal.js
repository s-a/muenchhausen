"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("de-DE");

describe("muenchhausen decimal", function () {
  it("should render a decimal!", function () {
    var merchandiseTVSpotText = "$(decimal.random)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    news.length.should.above(0);
  }); 
  
  it("should render a decimal between 100 and 200!", function () {
    var merchandiseTVSpotText = "$(decimal.random.value min:100,max:200)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    var i = parseFloat(news);
    i.should.above(100);
    i.should.below(200);
  });   

  it("should render a decimal between 100 and 200 with 3 decimal places!", function () {
    var merchandiseTVSpotText = "$(decimal.random min:100,max:200,decimalplaces:3)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    var i = parseInt(news);
    i.should.above(100);
    i.should.below(200);
    var s = news.split(muenchhausen.fake.decimal.i18n.numberFormatInfo.NumberDecimalSeparator);
    s.length.should.equal(2);
    var e = s[s.length - 1];
    e.length.should.equal(3);
  }); 
});
