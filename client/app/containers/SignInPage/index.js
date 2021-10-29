import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import SignIn from 'components/SignIn/Loadable'

export function SignInPage() {
  const [userCredentials, setUserCredentials] = useState ({email: "", password: ""})

  const verifyUser = async (event) => {
    event.preventDefault ()
    console.log(userCredentials);

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    if (!userCredentials.email || !userCredentials.password) {
      console.log("return from there");
      console.log(userCredentials);
      return;
    }

    try {
      const { data } = await axios.post ('http://192.168.43.20:5000/api/auth/login', userCredentials, config)
      localStorage.setItem ('authToken', data.token)
      console.log(data.token);
    } catch (error) {
      console.error(error);
    }
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
