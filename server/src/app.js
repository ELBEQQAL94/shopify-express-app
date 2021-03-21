require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routeNotFound = require('./helpers/routeNotFound');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(helmet());

// routes
app.get('/', (req, res) => {
  const { user } = req;
  res.json({
    message: 'Hello World!',
    user,
  });
});

app.get('/favicon.ico', (req, res) => res.status(204));


//app.use('/api/v1/users', IsLoogedIn, isAdmin, users);

app.use(routeNotFound);

module.exports = app;