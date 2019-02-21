const { GraphQLObjectType, GraphQLString } = require('graphql')
const { UserType } = require('../types')
const createUser = require('./createUser')

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstname: { type: GraphQLString },
        surname: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: createUser
    }
  }
})

module.exports = Mutations
