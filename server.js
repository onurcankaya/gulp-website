var StaticServer = require('static-server');

var server = new StaticServer({
  rootPath: './public/',
  port: 8000
});

server.start(function() {
  console.log('Server started on port ' + server.port);
});
