 var fs = require("fs");
 var path = require("path");

 function I18N(culture, i18nModuleName) {
   this.culture = culture;

   this.i18nModuleName = i18nModuleName;
   var webbrowser = (typeof window !== "undefined")
   var electron = ((typeof window !== "undefined") && window.process && window.process.type)
   if (webbrowser && !electron) {
     this._i18n = i18n; // i18n is a browser only upper scoped variable in bundled js file.
   }
   return this;
 }


 I18N.prototype.try = function (culture) {
   this.triedculture = culture;
   var dir = path.join(__dirname, "..", "..", "/lib/i18n", this.i18nModuleName);
   var fn = path.join(dir, culture + ".json");
   var result = null;
   if (fs.existsSync(fn)) {
     result = require(fn);
   }
   return result;
 }

 I18N.prototype.i18nFilename = function (culture) {
   var result = path.join(__dirname, "..", "..", "/lib/i18n", this.i18nModuleName, culture + ".json");
   return result;
 }

 I18N.prototype.jsonLoaderNode = function () {
   var result = this.try(this.culture);
   if (!result) {
     result = this.try(this.culture.split("-")[0]);
   }

   if (!result) {
     result = this.try("en-GB");
   }

   if (!result) {
     result = this.try("en");
   }


   if (!result) { // addres fallback
     result = this.try("us");
   }


   if (!result) {
     throw new Error("i18n json file not found for " + this.culture + ". Last tried: ", this.triedculture);
   }

   return result;
 };

 I18N.prototype.jsonLoaderBrowser = function () {
   var result = this._i18n[this.i18nModuleName][this.culture];
   if (!result) {
     result = this._i18n[this.i18nModuleName][this.culture.split("-")[0]];
   }

   if (!result) {
     result = this._i18n[this.i18nModuleName]["en-GB"];
   }

   if (!result) {
     result = this._i18n[this.i18nModuleName]["en"];
   }

   if (!result) { // address fallback
     result = this._i18n[this.i18nModuleName]["us"];
   }

   return result;
 };

 I18N.prototype.jsonLoader = function () {
   var result = null;
   var webbrowser = (typeof window !== "undefined")
   var electron = ((typeof window !== "undefined") && window.process && window.process.type)

   if (webbrowser && !electron) {
     result = this.jsonLoaderBrowser();
   } else { // webpack browser
     result = this.jsonLoaderNode();
   }

   return result;
 };

 module.exports = I18N;
