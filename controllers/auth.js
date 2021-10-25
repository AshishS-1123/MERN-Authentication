const User = require ('../models/User')

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
    res.status (500).json ({
      success: false,
      error: error.message
    })
  }
}

exports.loginUser = (req, res, next) => {
  res.send ("login route");
}

exports.forgotPassword = (req, res, next) => {
  res.send ("forgot pass route");
}

exports.resetPassword = (req, res, next) => {
  res.send ("reset pass route");
}
