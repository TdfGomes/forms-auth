const model = require('mongoose').model
const userSchema = require('../schemas').userSchema

const User = model('User', userSchema)

module.exports = User
