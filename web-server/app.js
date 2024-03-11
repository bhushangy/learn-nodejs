const http = require('http');
const fs = require('fs');
// The callback function you pass will be invoked whenever an request event is emitted.
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Internally how stream works ? Its attaching callbacks and reading dtata in chunks.
    // Since callbacks are always executed only if mainthread is free, this below line of
    // code will never block the main thread.
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  })
  .listen(1337, '127.0.0.1');
