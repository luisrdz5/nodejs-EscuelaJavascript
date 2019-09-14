const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler');
const { logHandler } = require('./utils/middleware/logHandlers.js');

app.use(express.json());
//Saving logs 
app.use(logHandler);

//procesamos las rutas
moviesApi(app);

// Catch 404
app.use(notFoundHandler);
//errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);




app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
