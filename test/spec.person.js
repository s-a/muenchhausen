"use strict";

require("should");
var Muenchhausen = require("../lib");

describe("muenchhausen person", function () {
  it("should render with unknown culture string!", function () {
	var muenchhausen = new Muenchhausen("zh-TW");
    var merchandiseTVSpotText = "$(date.now.text suffix:this)-$(date.random.value suffix:format,min:20200901)  $(date.random)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    news.length.should.be.above(10);
  });  
});
