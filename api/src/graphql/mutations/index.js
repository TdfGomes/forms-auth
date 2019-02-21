const { GraphQLObjectType } = require('graphql')
const { UserType, UserInputType } = require('../types')

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: {
      type: UserType,
      args: {
        input: {
          type: UserInputType
        }
      },
      resolve: () => 'User Created'
    }
  }
})

module.exports = Mutations
