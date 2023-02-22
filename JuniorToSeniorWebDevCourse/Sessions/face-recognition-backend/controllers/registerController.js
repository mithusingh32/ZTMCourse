const register = (req, res, SALT_ROUNDS, dbUtils, bcrypt) => {
  console.log('Creating user')
  if (req.body && req.body.email && req.body.password && req.body.name) {
    bcrypt.hash(req.body.password, parseInt(SALT_ROUNDS), (err, hash) => {
      if (err) console.log('register err', err);
      else {
        const newUser = {
          name: req.body.name,
          email: req.body.email,
        };
        dbUtils.insertNewUserIntoDatabase(newUser, hash, res);
      }
    });
  } else {
    res.status(412).json('Missing information');
  }
}

module.exports = {
  register
}
