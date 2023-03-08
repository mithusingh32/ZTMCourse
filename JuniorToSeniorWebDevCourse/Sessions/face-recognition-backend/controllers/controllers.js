const {handleSignIn} = require('./signinController');
const {register} = require('./registerController');
const {getProfileFromId, updateUserProfile} = require('./profileController');
const {getFaceBoundBox} = require('./facialRecognitionController');
module.exports = {
  handleSignIn,
  register,
  getProfileFromId,
  getFaceBoundBox,
  updateUserProfile
};
