const http = require('http')
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const graphqlHTTP = require('koa-graphql')
const { schema } = require('./graphql')
const dbConnect = require('../src/db/start')
const User = require('../src/db/models')
const cors = require('koa2-cors')

const createServer = async () => {
  console.log('Creating server...')
  await dbConnect()

  const app = new Koa()
  const router = new Router()

  router.all(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { User }
    })
  )

  app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

  const server = http.createServer(app.callback())

  server.on('close', async () => {
    console.log('Server closing')
  })

  server.on('error', async error => {
    console.log('Error', error)
  })

  console.log('Server created!')

  return server
}

module.exports = createServer
