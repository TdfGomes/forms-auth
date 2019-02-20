const mongoose = require('mongoose')
const Users = require('./models').Users

const dbConnect = () => {
  const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_NAME
  } = process.env
  const db = mongoose.connection

  mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_NAME}`, { useNewUrlParser: true, useCreateIndex: true })

  db.on('connecting', () => console.log('connecting to database......................'))

  db.once('open', async () => {
    console.log('=============================connected to database========================================= ')
    // we're connected!
    await Users.init()
    console.log('Indexes are done building!')
  })

  db.on('error', error => console.log('========> db error: ' + error.name))
}

module.exports = dbConnect
