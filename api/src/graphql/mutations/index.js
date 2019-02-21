const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')
const { UserType } = require('../types')
const { insertUser } = require('./resolvers')

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstname: { type: GraphQLString },
        surname: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLString }
      },
      resolve: insertUser
    }
  }
})

module.exports = Mutations
