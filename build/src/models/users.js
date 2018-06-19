'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var usersSchema = new Schema({
  fname: { type: String, lowercase: true, trim: true, required: [true, 'First name is required'] },
  lname: { type: String, lowercase: true, trim: true, required: [true, 'Last name is required'] },
  iname: { type: String, lowercase: true, trim: true, required: [true, "Institution name is required"] },
  phone: { type: String, trim: true, required: [true, 'Phone number is required'] },
  email: { type: String, lowercase: true, trim: true, required: [true, 'Email address is required'] },
  password: { type: String, lowercase: true, trim: true, required: [true, 'Password is required'] },
  userType: { type: String, required: true },

  cardHolderName: { type: String, required: true },
  expiringDate: { type: String, required: true },
  ccv: { type: String, required: true },
  baddress: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: Number, required: true },
  country: { type: String, required: true }
});

var User = _mongoose2.default.model('User', usersSchema);

exports.default = User;
//# sourceMappingURL=users.js.map