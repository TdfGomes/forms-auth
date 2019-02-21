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
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    creatAt: { type: GraphQLString },
    updateAt: { type: GraphQLString }
  }
})

const UserInputType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  description: 'Input user payload',
  fields: {
    firstname: { type: new GraphQLNonNull(GraphQLString) },
    surname: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
})

module.exports = { UserType, UserInputType }
