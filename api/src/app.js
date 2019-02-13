const assert = require('assert')
const createServer = require('./server')
const mongoose = require('mongoose')

const runApp = async () => {
  const app = await createServer()
  try {
    mongoose.connect('mongodb://database:27017/myapp', { useNewUrlParser: true }).then(
      () => { console.log('=============================connected to database========================================= ') },
      err => { console.log('ERROR==========================================================', err) }
    )
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
