const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// dotenv
require('dotenv').config()

// Utils
const dbUtils = require('./db/database-utils');

// Controllers
const {
  signIn,
  register,
  getProfileFromId,
  getFaceBoundBox,
} = require('./controllers/controllers');

// App Setup
const app = express();

// Middleware Setup
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Routes
app.get('/', (req, res) => {
  res.status(200).send("<h1>It's working</h1>");
});

/**
 * POST Sign In Endpoint
 *
 * Look for the user in the database based on email and password
 * If we can't find the user, it fails
 */
app.post('/signin', (req, res) => {
  return signIn(req, res, dbUtils, bcrypt);
});

/**
 * POST Register Endpoint
 *
 * Creates a new user and adds it to the database
 */
app.post('/register', (req, res) => {
  return register(req, res, process.env.SALT_ROUNDS, dbUtils, bcrypt);
});

/**
 * GET Profile Endpoint
 *
 * Gets the user profile from the id provided as params
 */
app.get('/profile/:id', (req, res) => {
  return getProfileFromId(req, res, null, null);
});

app.post('/image', (req, res) => {
  const { id, email, url } = req.body;
  return getFaceBoundBox(id, email, url, res);
});

app.listen(3000, () => {
  console.log('Server started on port ' + 3000);
});
