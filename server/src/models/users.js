import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
fname: {type: String, lowercase: true, trim: true, required: [true, 'First name is required']},
lname: {type: String, lowercase: true, trim: true, required: [true, 'Last name is required']},
iname: {type: String, lowercase: true, trim: true, required: [true, "Institution name is required"]},
phone: {type: String, trim: true, required: [true, 'Phone number is required']},
email: {type: String, lowercase: true, trim: true, required: [true, 'Email address is required']},
password: {type: String, lowercase: true, trim: true, required: [true, 'Password is required']},
userType: {type: String,required: true},

cardHolderName: {type: String, required: true},
expiringDate: {type: String, required: true},
 ccv: {type: String, required: true},
baddress: {type: String, required: true},
city: {type: String, required: true},
postalCode: {type: Number, required: true},
country: {type: String, required: true}
});

const User = mongoose.model('User', usersSchema);

export default User;