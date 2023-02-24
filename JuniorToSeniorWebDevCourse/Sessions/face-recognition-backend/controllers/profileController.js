const getProfileFromId = (req, res) => {
  console.log('user');
  console.log(req);
};

const updateUserProfile = (req, res, SALT_ROUNDS, dbUtils, bcrypt) => {
  const { id, email, newPassword } = req.body;
  if (parseInt(req.params.id) !== id)
    return res.status(500).send({ error: 'user ID did not match.' });
  else
    bcrypt.hash(newPassword, parseInt(SALT_ROUNDS), (err, hash) => {
      dbUtils.updateUserProfile(id, email, hash).then((user) => {
        return res.status(200).send(user);
      });
    });
};

module.exports = {
  getProfileFromId,
  updateUserProfile,
};
