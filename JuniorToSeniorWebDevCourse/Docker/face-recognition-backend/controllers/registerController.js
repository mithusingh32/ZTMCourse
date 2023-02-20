const register = (req, res, SALT_ROUNDS, dbUtils, bcrypt) => {
  console.log('Creating user')
  if (req.body && req.body.email && req.body.password && req.body.name) {
    console.log(SALT_ROUNDS)
    bcrypt.hash(req.body.password, parseInt(SALT_ROUNDS), (err, hash) => {
      if (err) console.log(err);
      else {
        const newUser = {
          name: req.body.name,
          email: req.body.email,
          entries: 0,
          joined: new Date(),
        };
        dbUtils.insertNewUserIntoDatabase(newUser, hash, res);

        //duplicate key value violates unique constraint
      }
    });
  } else {
    res.status(412).json('Missing information');
  }
}

module.exports = {
  register
}
