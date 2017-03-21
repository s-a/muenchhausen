"use strict";

var should = require("should");
var Muenchhausen = require("../lib");
var muenchhausen = new Muenchhausen("de-DE");

describe("muenchhausen main rendering", function () {
  it("should render random data!", function () {
    var merchandiseTVSpotText = "$(date.now.text suffix:this)-$(date.random.value suffix:format,min:20200901)  $(date.random)";
    var news = muenchhausen.render(merchandiseTVSpotText);
    news.length.should.be.above(10);
  });  

  it("should fail to render random data!", function () {
      var trigger = function(){
      var merchandiseTVSpotText = "$(date.now__OMG)";
      /*var news = */muenchhausen.render(merchandiseTVSpotText);
	};
	should.throws(trigger, "E_FAKE_METHOD_NOT_FOUND")
  });
});
