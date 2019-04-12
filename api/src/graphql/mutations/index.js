const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')
const { UserType } = require('../types')
const { insertUser, updateUser, deleteUser } = require('./resolvers')

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
    },
    updateUser: {
      type: UserType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
        firstname: { type: GraphQLString },
        surname: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve: updateUser
    },
    deleteUser: {
      type: UserType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: deleteUser
    }
  }
})

module.exports = Mutations
