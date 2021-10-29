import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import SignUp from 'components/SignUp/Loadable'

export function SignUpPage() {
  const [userCredentials, setUserCredentials] = useState ({username: "", email: "", password: ""})

  const signUpUser = async (event) => {
    event.preventDefault ()
    console.log(userCredentials);

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    if (!userCredentials.username || !userCredentials.email || !userCredentials.password) {
      console.log("return from there");
      console.log(userCredentials);
      return;
    }

    try {
      const { data } = await axios.post ('http://192.168.43.20:5000/api/auth/register', userCredentials, config)
      localStorage.setItem ('authToken', data.token)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <SignUp setUserCredentials={setUserCredentials} signUpUser={signUpUser}/>
    </React.Fragment>
  )
}

export default SignUpPage
