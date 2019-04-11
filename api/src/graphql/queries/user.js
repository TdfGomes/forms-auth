const { promisify } = require('util')
const { UserType } = require('../types')
const { totalUsers } = require('./users')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} = require('graphql')

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    totalUsers: {
      type: GraphQLInt,
      resolve: totalUsers
    },
    allUsers: {
      type: new GraphQLList(UserType),
      resolve: () => 'Hello World!'
    }
  }
})

module.exports = UserQuery
