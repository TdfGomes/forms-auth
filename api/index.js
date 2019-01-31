const Koa = require('koa')
const Router = require('koa-router')
const graphqlHTTP = require('koa-graphql')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')
// const schema = require('./src/schemas')
// const root = require('./src/resolvers')

const app = new Koa()
const router = new Router()

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

router.all(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.use(router.routes()).use(router.allowedMethods())

app.listen(9090, () => console.log('Server Running....'))
