const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList
} = require('graphql')
const { UserType } = require('../types')
const Mutations = require('../mutations')

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    allUsers: {
      type: new GraphQLList(UserType),
      resolve: () => 'Hello World!'
    }
  }
})

const schema = new GraphQLSchema({
  query: UserQuery,
  mutation: Mutations
})

module.exports = { schema }
