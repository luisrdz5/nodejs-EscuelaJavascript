const morgan = require('morgan');
var fs = require('fs')
var path = require('path')

const logHandler = function(req, res, next) {

  // create a write stream (in append mode)
  var accessLogStream = fs.createWriteStream(path.join('./', 'access.log'), { flags: 'a' });
  //morgan('combined', { stream: accessLogStream });
 // morgan(function (tokens, req, res) {
 //   console.log('Guardando log ...');
 // })
  accessLogStream.write('\n Se ha almacenado el log ')
  
  next();
};

module.exports = {
  logHandler
};
