require ("dotenv").config ({path: "./config.env"})

const express = require ('express')
const app = express ()

const PORT = process.env.PORT || 5000

app.use (express.json ())

app.use ('/api/auth', require ('./routes/auth'))

app.listen (PORT, () => {
  console.log(PORT);
})

app.get ('/', (req, res) => {
  console.log("hey there")
  res.end ("hello")
})
