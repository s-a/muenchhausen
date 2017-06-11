var webpack = require("webpack");
var path = require("path");

// returns a Compiler instance
webpack({
    entry: path.join(__dirname, "../lib"), 
    resolve: {
        modules: [
            path.join(__dirname, "../lib"),
            "node_modules"
        ]
    },
    context: path.join(__dirname, "../lib/i18n"),
	output: { 
        path: path.resolve(__dirname, "../dist"),  
        filename: "bundle.js",
        publicPath: "/assets/",
        library: "Muenchhausen",
        libraryTarget: "umd"
    }
}, function(err/*, stats*/) {
    if (err){
        console.log(err)
    } else {
        console.log("done.")
    }
});