const mongoose = require ('mongoose')
const bcrypt = require ('bcryptjs')

// The schema for database table
const UserSchema = new mongoose.Schema ({
  userName: {
    type: String,
    required: [true, "Please provide a user name."]
  },
  email: {
    type: String,
    required: [true, "Please provide a email."],
    unique: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please provide a valid email."
    ]
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: 6,
    select: false // If we query a user we dont want their password unless we ask for it explicitly
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
})

// pre('save') will run our callback function before every save operation to database
// the callback has to be made using function keyword
UserSchema.pre ('save', async function (next) {
  if (!this.isModified('password')) {
    // if password did not change, move to next middleware
    next ()
  }

  // salt creates random hash
  const salt = await bcrypt.genSalt (10)
  // hash the password and update it
  this.password = await bcrypt.hash (this.password, salt)
  next ()
})

// We are attaching this method to our user object and using it to compare passwords
// during authentication. Using bcrypt because the passwords are encrypted
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare (password, this.password)
}

const User = mongoose.model ('User', UserSchema)

module.exports = User
