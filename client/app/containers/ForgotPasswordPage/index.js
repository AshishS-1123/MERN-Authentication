import React, { memo } from 'react'
import PropTypes from 'prop-types'

import ForgotPassword from 'components/ForgotPassword/Loadable'

function ForgotPasswordPage() {
  return (
    <React.Fragment>
      <ForgotPassword />
    </React.Fragment>
  )
}

ForgotPasswordPage.propTypes = {
}

export default ForgotPasswordPage
