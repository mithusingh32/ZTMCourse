const knex = require('knex');
const pg = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'msingh32',
    database: 'smart-brain-db',
  },
});

/**
 * Inserts a new user into the database
 * @param newUser - JSON with new user data
 * @param hash - bcrypt hashed password
 * @param resp - response object
 */
const insertNewUserIntoDatabase = (newUser, hash, resp) => {
  // transaction lets us do multiple/complex queries in a single 'transaction'
  // but it only 'complete' the query if all the queries succeed.
  pg.transaction(async (trx) => {
    await trx('user')
      .insert(newUser)
      .returning('*')
      .then( async (id) => {
        // insert password hash into db w/ the serial generated ID
        const login = {
          id: id[0].id, // This is the ID from db
          password: hash,
          email: newUser.email,
        };
        await trx('login').insert(login);
      });
  })
    .then(result => resp.status(202).json({status: result, user: newUser}))
    .catch(err => resp.status(500).json({status: 'error', error_code: err.code}));
};

const getUserFromEmail = (email) => {
  return pg('user')
    .where({ email: email })
    .select('*')
    .then((resp) => {
      console.log('getUser', resp);
      return resp.length >= 1;
    });
};

module.exports = {
  insertNewUserIntoDatabase,
  getUserFromEmail,
};
