import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import SignUp from 'components/SignUp/Loadable'

export function SignUpPage() {
  const [userCredentials, setUserCredentials] = useState ({username: "", email: "", password: ""})

  const signUpUser = (event) => {
    event.preventDefault ()
    console.log(userCredentials);
  }

  return (
    <React.Fragment>
      <SignUp setUserCredentials={setUserCredentials} signUpUser={signUpUser}/>
    </React.Fragment>
  )
}

export default SignUpPage
