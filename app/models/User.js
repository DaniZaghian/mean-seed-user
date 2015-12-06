var mongoose = require('mongoose');
var Schema = mongoose.Schema; // allows us to create a constructor for our model

var UserSchema = new Schema({
  username: String, 
  email: String,
  sex: String,
  age: Number,
  bio: String
});

// defines prehook for document
// before each save the created_at value will be set
UserSchema.pre('save', function(next){
  next();
});

module.exports = mongoose.model('User', UserSchema);