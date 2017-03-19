"use strict";

 
function Emoji() {
    Emoji.super_.apply(this, arguments);
    return this; 
}

require("./../../extension/").extend(Emoji);

/**
 * returns a random emoji + key, e.g. `{ text: '❤️', value: 'heart' }`
 * @param {String} templateString a template string. For example `"emoji.random:{{{emoji.random}}}"`
 */
Emoji.prototype.random = function random() {
  var emoji = require("node-emoji");
  var res = emoji.random();
  var result = {
    value : res.key,
    text : res.emoji
  };
  return result;
};

/**
 * returns an icon based on its name, e.g. `"emoji.icon:{{{emoji.icon 'name:heart'}}}"`
 */
Emoji.prototype.icon = function icon(context) {
var emoji = require("node-emoji");
  var icon = context && context.name ? ":" + context.name + ":" : ":fast_forward:";
  var res = emoji.get(icon) 
  var result = {
    value : res,
    text : res
  };
  return result;
};

 

module.exports = Emoji;