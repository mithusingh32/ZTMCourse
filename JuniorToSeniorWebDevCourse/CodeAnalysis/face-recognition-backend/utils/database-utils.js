const sqlite3 = require('sqlite3').verbose();
const knex = require('knex');
// const pg = knex({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: 5432,
//     user: 'postgres',
//     password: 'msingh32',
//     database: 'smart-brain-db',
//   },
// });

// sqlite3.Database('./db.sqlite');

const sqlite = knex({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  },
  useNullAsDefault: true,
  debug: true
});

const createDbAndTable = () => {
  console.log('creating DB a');
  // const db = sqlite3.Database('./db.sqlite');
  sqlite.schema.hasTable('user').then((exists) => {
    if (!exists) {
      console.log('building tables');
      buildUserTable().then(msg => console.log).catch(e => console.log);
      buildLoginTable().then(msg => console.log).catch(e => console.log);
    }
  });

}

const buildUserTable = () => {
  return sqlite.schema.createTable('user', (t) => {
    t.increments('id').primary().unique().notNullable();
    t.string('name', 100);
    t.text('email').unique();
    t.bigint('entries');
    t.dateTime('joined');
  })
}

const buildLoginTable = () => {
  return sqlite.schema.createTable('login', t => {
    t.increments('id').primary();
    t.foreign('id').references('user.id')
    t.text('email').primary().unique().notNullable();
    t.foreign('email').references('user.email');
    t.string('hash', 100);
  })
}
/**
 * Inserts a new user into the database
 * @param newUser - JSON with new user data
 * @param hash - bcrypt hashed password
 * @param resp - response object
 */
const insertNewUserIntoDatabase = (newUser, hash, resp) => {
  // transaction lets us do multiple/complex queries in a single 'transaction'
  // but it only 'complete' the query if all the queries succeed.
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
      });
  })
    .then((result) => resp.status(201).json({ status: result, user: newUser }))
    .catch((err) => resp.status(500).json({ status: 'error', error_code: err.code }));
};

/**
 * Returns user and login entries for an email address
 * @param email email address
 */
const getUserFromEmail = (email) => {
  return sqlite('user').join('login', 'user.id', 'login.id').select('*').where({
    'user.email': email,
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
  createDbAndTable
};
