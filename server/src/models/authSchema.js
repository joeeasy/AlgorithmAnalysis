import mongoose from 'mongoose';

var authSchema = mongoose.Schema({ 
  username: String,
  password: String
});

authSchema.methods.validPassword = function( pwd ) {
  // EXAMPLE CODE!
  return ( this.password === pwd );
};