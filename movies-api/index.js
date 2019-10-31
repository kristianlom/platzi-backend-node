const express = require('express');
const cors = require('cors');
const app = express();
const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');
app.use(cors());
// Body parser
app.use(express.json());

//Routes
moviesApi(app);

//Catch 404
app.use(notFoundHandler);

// Errors Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function() {
  const debug = require('debug')('app:server');
  debug(`Listening http://localhost:${config.port}`);
});
