module.exports = {
  "context": __dirname + "/app",
  "entry": __dirname + "/lib/index.js",
  "output": {
    "path": __dirname + "/dist",
    "filename": "bundle.js"
  },
  "node": {
    "fs": "empty"
  },
  "module": {
    "rules": [{
      "test": /\.json$/,
      "use": "json-loader"
    }]
  }
}
