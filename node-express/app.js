const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Middleware

// Look for file named wahtever followed by assets in the url in the public folder
app.use('/assets', express.static(__dirname + '/public'));

// If you do not specify a route for a middleware, then it will run for all the routes.
app.use('/', function (req, res, next) {
  console.log(req.url);
  // This means call the next middleware which is nothinh but the get rquest handler
  next();
});

// req and res here is a an express req and res that wraps around the node req and
// res with some additional functionalities.
app.get('/:id', function (req, res) {
  res.send(
    '<html><head><link rel=stylesheet href=assets/style.css /><title>Node-Express</title></head><body><h1>Hello world!! ' +
      req.params.id +
      '</h1></body></html>'
  );
});

app.listen(port);
