const assert = require('assert')
const createServer = require('./server')

const runApp = async () => {
  createServer().then(
    app =>
      app.listen(9090, err => {
        assert(!err, err)

        console.log('SERVER RUNNING')
      }),
    err => {
      console.error('Error while starting up server', err)
      process.exit(1)
    }
  )
}

module.exports = runApp
