const { signIn } = require('./signinController');
const { register } = require('./registerController');
const { getProfileFromId } = require('./profileController');
const { getFaceBoundBox } = require('./facialRecognitionController');
module.exports = {
  signIn,
  register,
  getProfileFromId,
  getFaceBoundBox,
};
