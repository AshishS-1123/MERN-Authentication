import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Input from 'components/Input/Loadable'
import './index.css'

function ForgotPassword({ setUserEmail, requestPasswordReset }) {
  return (
    <div className='container'>
      <h1 className="container_heading">
        <span className="back_button">
          <Link to='/'>
            &lt;
          </Link>
        </span>
        Forgot Password
      </h1>


      <form className="form">
        <Input label="Email"
               type="text"
               placeholder="Enter Your Email"
               autocomplete="username"
               setUserCredentials={setUserEmail}
               />

        <button type='submit'
                className='button'
                onClick={requestPasswordReset}
                >Send Reset Email</button>
      </form>
    </div>
  )
}

ForgotPassword.propTypes = {
  setUserEmail: PropTypes.func.isRequired,
  requestPasswordReset: PropTypes.func.isRequired,
}

export default memo(ForgotPassword);
