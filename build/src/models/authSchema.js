'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authSchema = _mongoose2.default.Schema({
  username: String,
  password: String
});

authSchema.methods.validPassword = function (pwd) {
  // EXAMPLE CODE!
  return this.password === pwd;
};
//# sourceMappingURL=authSchema.js.map