import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import ForgotPassword from 'components/ForgotPassword/Loadable'

function ForgotPasswordPage() {
  const [userEmail, setUserEmail] = useState ('')

  const requestPasswordReset = async (event) => {
    event.preventDefault ()

    if (!userEmail) {
      return
    }
    
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    try {
      const { data } = await axios.post ('http://192.168.43.20:5000/api/auth/forgotPassword', { email: userEmail }, config)
      localStorage.setItem ('authToken', data.token)
      console.log(data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <ForgotPassword setUserEmail={setUserEmail} requestPasswordReset={requestPasswordReset}/>
    </React.Fragment>
  )
}

ForgotPasswordPage.propTypes = {
}

export default ForgotPasswordPage
