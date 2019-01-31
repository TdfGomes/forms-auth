const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql')

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    message: GraphQLString
  }
})
exports.schema = new GraphQLSchema({
  query: queryType
})
