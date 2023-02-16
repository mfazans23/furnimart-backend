const mongoose = require('mongoose')
const config = require('../config')

mongoose.set('strictQuery', false)

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

connectDB()

module.exports = connectDB
