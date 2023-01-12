const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost/users');

const userSchema = mongoose.Schema({
  id: Number,
  username: { type: String, unique: true },
  password: String,
  score: { type: Number, default: 0 },
});

const USERS = mongoose.model('USERS', userSchema);

module.exports = USERS;
