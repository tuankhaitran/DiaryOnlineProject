const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  confirmPassword: String,
  email: String,

})

const User = mongoose.model('User', UserSchema)
module.exports = User
