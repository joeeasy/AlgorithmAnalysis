'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var helpers = {};

helpers.validatePassword = function (password, existingPassword) {
	return password === existingPassword;
};

helpers.ensureAuthentication = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/login');
	}
};
exports.default = helpers;
//# sourceMappingURL=helpers.js.map