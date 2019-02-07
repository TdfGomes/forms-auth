const assert = require('assert')
const createServer = require('./server')

const runApp = async () => {
  const app = await createServer()
  try {
    await app.listen(9090, err => {
      assert(!err, err)
      console.log('SERVER RUNNING')
    })
  } catch (error) {
    console.error('Error while starting up server', error)
    process.exit(1)
  }
}

module.exports = runApp
