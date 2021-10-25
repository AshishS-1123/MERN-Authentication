exports.registerUser = (req, res, next) => {
  res.send ("register route");
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
