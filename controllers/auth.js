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

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status (400).json ({
      success: false,
      error: "Please provide email and password."
    })
  }

  try {
    const user = await User.findOne({ email }).select ('+password')

    if (!user) {
      res.status (404).json ({
        success: false,
        error: "Invalid Credentials."
      })
    }

    const isMatch = await user.matchPassword (password)

    if (!isMatch) {
      res.status (404).json ({
        success: false,
        error: "Invalid Credentials."
      })
    }

    // If everything was done properly, send success to user
    res.status (200).json ({
      success: true,
      token: "some random token"
    })
    
  } catch (error) {
    res.status (500).json ({
      success: false,
      error: error.message
    })
  }
}

exports.forgotPassword = (req, res, next) => {
  res.send ("forgot pass route");
}

exports.resetPassword = (req, res, next) => {
  res.send ("reset pass route");
}
