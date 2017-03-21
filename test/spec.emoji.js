"use strict";

require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("de-DE");

describe("muenchhausen emojis", function () {
  it("should render 3 fake emojis!", function () {
    var merchandiseTVSpotText = "$(emoji.random)$(emoji.icon name:heart)$(emoji.icon)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    news.length.should.above(3);
  });
  it("should render a heart!", function () {
    var merchandiseTVSpotText = "$(emoji.icon name:heart)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    news.should.equal("❤️");
  });
});
