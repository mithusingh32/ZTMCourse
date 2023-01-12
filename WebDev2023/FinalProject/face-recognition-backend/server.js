const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Utils
const dbUtils = require('./utils/database-utils');

// Controllers
const { signIn, register, getProfileFromId} = require('./controllers/controllers');


// App Setup
const app = express();

// Middleware Setup
app.use(bodyParser.json());
app.use(cors());

// Helper Functions
function incrementEntries(id, email, res) {
  dbUtils.incrementEntries(id, email, res);
}

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
  return register(req, res, SALT_ROUNDS, dbUtils, bcrypt);
});

/**
 * GET Profile Endpoint
 *
 * Gets the user profile from the id provided as params
 */
app.get('/profile/:id', (req, res) => {
  return getProfileFromId(req, res, null, null);
});

/**
 * PATCH Image Endpoint
 *
 * Update the images processed
 */
app.patch('/image', (req, res) => {
  const { id, email } = req.body;
  return incrementEntries(id, email, res);
});

/**
 * PUT Image Endpoint
 *
 * Update the images processed
 */
app.put('/image', (req, res) => {
  const { id, email } = req.body;
  incrementEntries(id, email, res);
});

/* Routes/API:
     - /signin   POST = success/fail
     - /register POST = return created user
     - /profile/:userId  GET  = returns profile of user
     - /image PATCH/PUT = returns the updated user
     */

app.listen(3000, () => {
  console.log('Server started on port ' + 3000);
});
