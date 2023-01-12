const { signIn } = require('./signinController');
const { register } = require('./registerController');
const { getProfileFromId } = require('./profileController');
module.exports = {
  signIn,
  register,
  getProfileFromId,
};
