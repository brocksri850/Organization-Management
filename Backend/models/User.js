// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // 'admin' or 'user'
  organization: { type: Schema.Types.ObjectId, ref: 'organizations' },
});

module.exports = mongoose.model('users', UserSchema);