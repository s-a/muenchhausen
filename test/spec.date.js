"use strict";

require("should");
var Muenchhausen = require("../lib");

describe("muenchhausen weekday name", function () {
  it("should render a weeday in english!", function () {
    var a = new Muenchhausen("en-GB");
    var merchandiseTVSpotText = "$(date.weekday)";
    var news = a.render(merchandiseTVSpotText);
    news.should.be.equalOneOf("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");  
  }); 

  it("should render a weekday in german!", function () {
    var b = new Muenchhausen("de-DE");
    var merchandiseTVSpotText = "$(date.weekday)";
    var news = b.render(merchandiseTVSpotText);
    news.should.be.equalOneOf("Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag");  
  }); 
});

describe("muenchhausen month name", function () {
  it("should render a month name in english!", function () {
    var c = new Muenchhausen("en-GB");
    var merchandiseTVSpotText = "$(date.month)";
    var news = c.render(merchandiseTVSpotText);
    news.should.be.equalOneOf("January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December");  
  }); 

  it("should render a month name in german!", function () {
    var d = new Muenchhausen("de-DE");
    var merchandiseTVSpotText = "$(date.month)";
    var news = d.render(merchandiseTVSpotText);
    news.should.be.equalOneOf("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");  
  }); 
});
