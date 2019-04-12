const { UserType } = require('../../types')
const { totalUsers, allUsers } = require('./resolvers')
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
      resolve: allUsers
    }
  }
})

module.exports = UserQuery
