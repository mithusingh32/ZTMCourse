const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Constants
const SALT_ROUNDS = 10;

let count = 1;
const database = {
  users: [
    {
      id: count++,
      name: 'john',
      email: 'john@john.com',
      password: 'cookies',
      entries: 0,
      joined: new Date(),
    },
    {
      id: count++,
      name: 'sally',
      email: 'sally@john.com',
      password: 'bananas',
      entries: 0,
      joined: new Date(),
    },
  ],
  login: [
    {
      id: 1,
      email: 'john@john.com',
      password: '$2b$10$IF5uhDvXaUql1ezsSK6dlek9giY0EbtVXVzcXZ2olrnh7RbmDKTr.'
    },
    {
      id: 2,
      email: 'sally@john.com',
      password: '$2b$10$Wo7Q9E6dJ2q3xBAUCVtyguL3QfjNoJFEld5AQ5zmD6oeo8m0kRdhO'
    }
  ],
};

// App Setup
const app = express();

// Middleware Setup
app.use(bodyParser.json());
app.use(cors());

// Helper Functions
function incrementEntries(id, res) {
  if (id) {
    for (let i = 0; i < database.users.length; i++) {
      if (database.users[i].id === id) {
        database.users[i].entries++;
        const {email, name, id, entries, joined} = database.users[i]
        return res.status(200).json({email, name, id, entries, joined});
      }
    }
    res.status(404).json(`User not found`);
  } else {
    res.status(500).json(`Error updating entries`);
  }
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
  console.log(req.body)
  const { email, password } = req.body;
  if (email && password) {
    // Get the user and login from the database
    const user = database.users.filter(
      (x) => x.email === req.body.email && x.password === req.body.password,
    );
    const login = database.login.filter((login) => login.email === email);
    if (user.length === 1 && login.length === 1) {

      bcrypt.compare(password, login[0].password, (err, result) => {
        const userData = {
          id: user[0].id,
          name: user[0].name,
          email: user[0].email,
          entries: user[0].entries,
          joined: user[0].joined,
        }
        if (result) return res.status(200).json({status: 'success', user: userData});
        else return res.status(500).json('fail');
      });
    }
  }
  return 'sign in complete';
});

/**
 * POST Register Endpoint
 *
 * Creates a new user and adds it to the database
 */
app.post('/register', (req, res) => {
  console.log(req.body);
  if (req.body && req.body.email && req.body.password && req.body.name) {
    for (let i = 0; i < database.users; i++) {
      if (database.users[i] === req.body.email) {
        return res.status(418).json('email already exists');
      }
    }
    bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
      if (err) console.log(err);
      else {
        const newUser = {
          id: count++,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          entries: 0,
          joined: new Date(),
        };
        const login = {
          id: newUser.id,
          password: hash,
          email: newUser.email,
        };
        database.login.push(login);
        database.users.push(newUser);
        return res.status(202).json(newUser);
      }
    });
  } else {
    res.status(412).json('Missing information');
  }
});

/**
 * GET Profile Endpoint
 *
 * Gets the user profile from the id provoded as params
 */
app.get('/profile/:id', (req, res) => {
  console.log(req.params);
  if (req.params && req.params.id) {
    const user = database.users.filter((x) => x.id === parseInt(req.params.id));
    if (user.length === 1) {
      res.status(200).json(user);
    } else if (user.length > 1) {
      res.status(500).json('more than 1 user found.');
    } else {
      res.status(404).json('user does not exist');
    }
  } else {
    res.status(500).json('could not get users');
  }
});

/**
 * PATCH Image Endpoint
 *
 * Update the images processed
 */
app.patch('/image', (req, res) => {
  const { id } = req.body;
  return incrementEntries(id, res);
});

/**
 * PUT Image Endpoint
 *
 * Update the images processed
 */
app.put('/image', (req, res) => {
  const { id } = req.body;
  incrementEntries(id, res);
  return res.status(404).json('could not find user');
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
