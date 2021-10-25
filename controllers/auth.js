const User = require ('../models/User')
const ErrorResponse = require ('../utils/errorResponse')

exports.registerUser = async (req, res, next) => {
  // Get the login info from the request
  const { userName, email, password } = req.body

  try {
    // Create a new user in the database.
    // No need to perform hashing. Will be done using middleware
    const user = await User.create ({
      userName, email, password
    })

    // If everything was done properly, send success to user
    res.status (201).json ({
      success: true,
      user: user
    })
  } catch (error) {
    // In case of error, inform user
    return next (new ErrorResponse (error.message))
  }
}

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next (new ErrorResponse ("Please provide email and password.", 400))
  }

  try {
    const user = await User.findOne({ email }).select ('+password')

    if (!user) {
      return next (new ErrorResponse ("Invalid Credentials.", 401))
    }

    const isMatch = await user.matchPassword (password)

    if (!isMatch) {
      return next (new ErrorResponse ("Invalid Credentials.", 401))
    }

    // If everything was done properly, send success to user
    res.status (200).json ({
      success: true,
      token: "some random token"
    })

  } catch (error) {
    return next (new ErrorResponse (error.message))
  }
}

exports.forgotPassword = (req, res, next) => {
  res.send ("forgot pass route");
}

exports.resetPassword = (req, res, next) => {
  res.send ("reset pass route");
}
