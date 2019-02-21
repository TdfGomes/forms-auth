const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    const {
      DB_HOST,
      DB_PORT,
      DB_USER,
      DB_PASS,
      DB_NAME
    } = process.env
    console.log('CONNECTING TO DATABSE...................')
    await mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_NAME}`, { useNewUrlParser: true, useCreateIndex: true })
    console.log('=============CONNECTED TO DATABASE==================')
  } catch (error) {
    console.log('==========>DATABASE ERROR', error)
  }
}

module.exports = dbConnect
