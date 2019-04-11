const { GraphQLSchema } = require('graphql')

const Mutations = require('../mutations')
const UserQuery = require('../queries').UserQuery

const schema = new GraphQLSchema({
  query: UserQuery,
  mutation: Mutations
})

module.exports = { schema }
