import React, { memo } from 'react'
import PropTypes from 'prop-types'

import SignIn from 'components/SignIn/Loadable'

export function SignInPage() {
  return (
    <React.Fragment>
      <SignIn />
    </React.Fragment>
  )
}

export default SignInPage
