import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Input from 'components/Input/Loadable'
import './index.css'

function SignIn({ setUserCredentials, verifyUser }) {
  return (
    <div className="container">
      <h1 className="container_heading">
        <span className="back_button">
          <Link to='/'>
            &lt;
          </Link>
        </span>
        Sign In
      </h1>

      <form className="form">
        <Input label="Email"
               type="text"
               placeholder="Enter Your Email"
               autocomplete="username"
               setUserCredentials={setUserCredentials}
               />
        <Input label="Password"
               type="password"
               placeholder="Enter Your Password"
               autocomplete="current-password"
               setUserCredentials={setUserCredentials}
               />
        <Link to='/forgotPassword'><div>Forgot Password?</div></Link>

        <button type="submit"
                className="button"
                onClick={verifyUser}>Sign In</button>
        <p>
          Don't have an account?&nbsp;
          <Link to='/register'>Sign Up</Link> here.
        </p>
      </form>
    </div>
  )
}

SignIn.propTypes = {
  setUserCredentials: PropTypes.func.isRequired,
  verifyUser: PropTypes.func.isRequired
}

export default memo(SignIn);
