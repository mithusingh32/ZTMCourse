const register = (req, res, SALT_ROUNDS, dbUtils, bcrypt) => {
  if (req.body && req.body.email && req.body.password && req.body.name) {
    bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
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
