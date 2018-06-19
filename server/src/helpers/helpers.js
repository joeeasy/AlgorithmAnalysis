const helpers = {};

helpers.validatePassword = (password, existingPassword) =>  (password === existingPassword);

helpers.ensureAuthentication = (req, res, next) => {
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/login');
	}
}
export default helpers;