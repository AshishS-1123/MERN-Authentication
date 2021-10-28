import React, { memo } from 'react'
import PropTypes from 'prop-types'

import ResetPassword from 'components/ResetPassword/Loadable'

function PasswordResetPage() {
  return (
    <React.Fragment>
      <ResetPassword />
    </React.Fragment>
  )
}

PasswordResetPage.propTypes = {
}

export default PasswordResetPage
