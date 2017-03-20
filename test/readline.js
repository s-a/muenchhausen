"use strict";

var assert = require("assert");
var rndline = require("../lib/random-line");

describe("large files", function () {
  it("should read random line from large file fast!", function (done) {
    rndline("./lib/random-line/access_log", function (line) {
      assert(true, line !== null && line !== undefined);
      done();
    });
  });
});
