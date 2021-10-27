import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import Input from 'components/Input/Loadable'
import './index.css'

function SignIn() {
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
        <Input label="Email" type="text" placeholder="Enter Your Email" autocomplete="username"/>
        <Input label="Password" type="password" placeholder="Enter Your Password" autocomplete="current-password"/>

        <button type="submit" className="button">Sign In</button>
        <p>
          Don't have an account?&nbsp;
          <Link to='/signUp'>Sign Up</Link> here.
        </p>
      </form>
    </div>
  )
}

SignIn.propTypes = {};

export default memo(SignIn);
