/**
 * Retrieve user from ID
 * @param req - Request
 * @param res - Response
 * @param dbUtils - Database Utils
 * @returns {Promise<*>} - Response with error message or user
 */
const getProfileFromId = (req, res, dbUtils) => {
  return dbUtils.getUserFromId(req.params.id).then(resp => {
    return res.status(200).json({...resp[0]})
  }).catch(()=>{
    return res.status(400).json("User Does Not Exist")
  })
};

/**
 * Update user information
 * @param req - Request
 * @param res - Response
 * @param SALT_ROUNDS - Salt for hashing
 * @param dbUtils - Database Utils
 * @param bcrypt - BCrypt
 * @returns {*} - Response with error message or user
 */
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
