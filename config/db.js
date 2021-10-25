const mongoose = require ('mongoose')

// This jst establishes a connection to the database.
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log("Mongo DB Connected");
}

module.exports = connectDB
