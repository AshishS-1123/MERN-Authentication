import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import SignIn from 'components/SignIn/Loadable'

export function SignInPage() {
  const [userCredentials, setUserCredentials] = useState ({email: "", password: ""})

  const verifyUser = (event) => {
    event.preventDefault ()
    console.log(userCredentials);
  }

  return (
    <React.Fragment>
      <SignIn setUserCredentials={setUserCredentials}
              verifyUser={verifyUser}
      />
    </React.Fragment>
  )
}

export default SignInPage
