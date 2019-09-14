const morgan = require('morgan');

const logHandler = function(req, res, next) {
  console.log('LOGGED');
  console.log(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));
  console.log('LogueADO');
  next();
};

module.exports = {
  logHandler
};
