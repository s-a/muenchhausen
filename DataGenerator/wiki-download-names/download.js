 
var filename = "./names.xml";
var file = fs.createWriteStream(filename);
var url = "https://de.wikipedia.org/w/index.php?title=Spezial:Exportieren&history=0&action=submit&pages=Liste%20von%20Vornamen";
var request = https.get(url, function(response) {
  response.pipe(file);


}); 
