const express = require('express');
const app = express();
const helmet = require("helmet");

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies.js');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler');
//const morgan = require('morgan');
//const fs = require('fs')
//const path = require('path')
//const accessLogStream = fs.createWriteStream(path.join('./', 'access.log'), { flags: 'a' });
const responseTime = require('response-time')

app.use(express.json());
app.use(helmet());
//Saving logs 
//app.use(morgan('combined', { stream: accessLogStream }));
app.use(responseTime());
//procesamos las rutas
authApi(app);
moviesApi(app);
userMoviesApi(app);

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`New UserInfo: ${userInfo}`);
});


// Catch 404
app.use(notFoundHandler);
//errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);




app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
