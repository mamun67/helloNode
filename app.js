var https = require('https');
var fs = require('fs');
express = require('express'),
app = express();

var options = {
  key: fs.readFileSync('privateKey.key'),
  cert: fs.readFileSync('certificate.crt')
};

https.createServer(options, app).listen(8000);

app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('Hello World!');
});

console.log("listening to port 8000");
