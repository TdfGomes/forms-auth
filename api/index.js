const Koa = require('koa')
const router = require('koa-joi-router')

const auth = router()

auth.get('/', async (ctx) => {
  console.log('LOGGING')
  ctx.body = 'Hello World!'
})

const app = new Koa()
app.use(auth.middleware())
app.listen(8080)