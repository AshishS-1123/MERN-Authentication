const User = require ('../models/User')
const ErrorResponse = require ('../utils/errorResponse')
const sendEmail = require ('../utils/sendEmail')

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
    sendToken (user, 201, res)

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
    sendToken (user, 200, res)

  } catch (error) {
    return next (new ErrorResponse (error.message))
  }
}

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body

  try {
    const user = await User.findOne ({email})

    if (!user) {
      return next (new ErrorResponse ("Email could not be sent", 404))
    }

    const resetToken = user.getResetPasswordToken ()

    // save the reset token to the database
    await user.save ()

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`
    const message =  `
      <h1>You have requested a password request</h1>
      <p>Go to this link to reset password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `

    try {
      await sendEmail ({
        to: user.email,
        subject: "Password Reset",
        text: message
      })

      res.status (200).json ({
        success: true,
        data: "Email Sent!"
      })

    } catch (error) {
      console.log(error);
      user.resetPasswordToken = undefined
      user.resetPasswordExpire = undefined

      await user.save ()

      return next (new ErrorResponse ("Email could not be sent.", 500))
    }
  } catch (error) {
    next (error)
  }
}

exports.resetPassword = (req, res, next) => {
  res.send ("reset pass route");
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken ()
  res.status (statusCode).json ({
    success: true,
    token
  })
}
