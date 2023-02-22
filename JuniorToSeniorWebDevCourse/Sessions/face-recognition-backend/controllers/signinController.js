const signIn = (req, res, dbUtils, bcrypt) => {
  const { email, password } = req.body;
  if (email && password) {
    dbUtils.getUserFromEmail(email).then((result) => {
      if (!result || result.length === 0) {
        return res.status(500).json('fail');
      } else if (result.length > 1) {
        return res
          .status(500)
          .json(
            'please contact admin immediately. Multiple accounts found with ' + email,
          );
      } else {
        const { id, name, email, entries, joined, hash } = result[0];
        bcrypt.compare(password, hash, (err, result) => {
          if (result) {
            const userData = {
              id,
              name,
              email,
              entries,
              joined,
            };
            return res.status(200).json({ status: 'success', user: userData });
          } else {
            return res.status(403).json('Password/Email Combo Do Not Match');
          }
        });
      }
    })
    .catch(err => {
      return res.status(403).json('Password/Email Combo Do Not Match');
    });
  }
  return 'sign in complete';
}

module.exports = {
  signIn,
}
