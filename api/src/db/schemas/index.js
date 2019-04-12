const Schema = require('mongoose').Schema

const userSchema = new Schema({
  firstname: String,
  surname: String,
  email: { type: String, required: true, unique: true },
  password: String
}, { timestamps: true })

module.exports = { userSchema }
