const http = require('http')
const Koa = require('koa')
const Router = require('koa-router')
const graphqlHTTP = require('koa-graphql')
const { schema } = require('./graphql')

const createServer = async () => {
  console.log('Creating server...')

  const app = new Koa()
  const router = new Router()

  router.all(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  )

  app.use(router.routes()).use(router.allowedMethods())

  const server = http.createServer(app.callback())

  server.on('close', async () => {
    console.log('Server closing')
  })

  server.on('error', async error => {
    console.log('Error', error)
  })

  console.log('Server created.')

  return server
}

module.exports = createServer
