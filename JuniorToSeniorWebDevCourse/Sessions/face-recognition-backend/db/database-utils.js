const knex = require('knex');
const knexConfig = require('./knexfile');

const sqlite = knex(knexConfig);

/**
 * Inserts a new user into the database
 * @param newUser - JSON with new user data
 * @param hash - bcrypt hashed password
 * @param resp - response object
 */
const insertNewUserIntoDatabase = (newUser, hash, resp) => {
  // transaction lets us do multiple/complex queries in a single 'transaction'
  // but it only 'complete' the query if all the queries succeed.
  let entries = 0;
  sqlite.transaction(async (trx) => {
    await trx('user')
      .insert(newUser)
      .returning('*')
      .then(async (id) => {
        // insert password hash into db w/ the serial generated ID
        const login = {
          id: id[0].id, // This is the ID from db
          hash: hash,
          email: newUser.email,
        };
        await trx('login').insert(login);
        console.log(id[0])
        entries = id[0].entries;
      });
  })
    .then((result) => resp.status(201).json({ status: result, user: {...newUser, entries} }))
    .catch((err) => resp.status(500).json({ status: 'error', error_code: err }));
};

/**
 * Returns user and login entries for an email address
 * @param email email address
 */
const getUserFromEmail = (email) => {
  console.log(email);
  return sqlite('user').join('login', 'user.id', 'login.id').select('*').where({
    'user.email': email
  });
};

/**
 * Increments the entry for the id-email paur
 * @param id - user id
 * @param email - user email
 */
const incrementEntries = (id, email) => {
  let updatedUser;
  return sqlite.transaction(async (trx) => {
    await trx('user')
      .where({
        id,
        email,
      })
      .update({
        entries: sqlite.raw('entries + 1'),
      })
      .returning('*')
      .then((result) => {
        updatedUser = result[0];
      });
  })
    .then((result) => {
      return { status: result, user: updatedUser };
    })
    .catch((err) => {
      return {
        status: 'error',
        error_code: err.code,
      };
    });
};

module.exports = {
  insertNewUserIntoDatabase,
  getUserFromEmail,
  incrementEntries,
};
