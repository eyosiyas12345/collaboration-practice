const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer(function (req,res){
//set content type to text/html
  res.writeHead(200, {'content-Type': 'text/html'});
//construct the absolute path to html.
  const filePath = path.join(__dirname, 'contact.html')
//read the html file stream
  const readStream = fs.createReadStream(filePath);
//pipe the read stream tothe response stream.
  readStream.pipe(res);
});
server.listen(8080, function(){ console.log('listening...')});
