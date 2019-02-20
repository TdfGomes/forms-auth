const model = require('mongoose').model
const userSchema = require('../schemas').userSchema

const Users = model('Users', userSchema)

module.exports = { Users }
