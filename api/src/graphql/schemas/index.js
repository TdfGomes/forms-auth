const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    message: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: () => 'Hello World!'
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

module.exports = { schema }
