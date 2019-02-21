const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: {
    _id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    surname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    createAt: { type: GraphQLString },
    updateAt: { type: GraphQLString }
  }
})

module.exports = { UserType }
