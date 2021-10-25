require ("dotenv").config ({path: "./config.env"})

const express = require ('express')
const app = express ()

const connectDB = require ('./config/db')
connectDB ()

const errorHandler = require ('./middleware/error')

const PORT = process.env.PORT || 5000

app.use (express.json ())
app.use ('/api/auth', require ('./routes/auth'))

// Error Handler should always be the last middleware
app.use (errorHandler)

const server = app.listen (PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
})

// This will long the error if it occurs anywhere in app
process.on ('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`)
  server.close (() => process.exit (1))
})
