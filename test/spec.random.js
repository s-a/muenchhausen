"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("de-DE");

describe("muenchhausen random", function () {
  it("should render 3 random items!", function () {
    var merchandiseTVSpotText = "$(random.element of:[mh-1,mh-2,mh-3]) $(random.element) $(random.element of:{foo:5,unicorn:true,rainbow:blue})";
    var news = muenchhausen.render(merchandiseTVSpotText);
    news.length.should.above(3);
  }); 
});
