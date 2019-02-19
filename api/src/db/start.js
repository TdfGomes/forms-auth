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

    console.log('connecting to database......................')

    await mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_NAME}`, { useNewUrlParser: true })

    console.log('=============================connected to database========================================= ')
  } catch (error) {
    console.log('DATABASE ERROR==================== ', error)
  }
}

module.exports = dbConnect
