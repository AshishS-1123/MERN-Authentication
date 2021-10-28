import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import Input from 'components/Input/Loadable'
import './index.css'

function SignUp() {
  return (
    <div className="container">
      <h1 className="container_heading">
        <span className="back_button">
          <Link to='/'>
            &lt;
          </Link>
        </span>
        Sign Up
      </h1>

      <form className="signup-form">
        <Input label="Email" type="text" placeholder="Enter Your Email" autocomplete="username"/>
        <Input label="Username" type="text" placeholder="Choose A Username" autocomplete="name"/>
        <Input label="Password" type="password" placeholder="Enter Your Password" autocomplete="current-password"/>

        <button type="submit" className="button">Sign Up</button>
        <p style={{margin: "0 auto", textAlign: "center"}}>
          Already have an account?&nbsp;
          <Link to='/login'>Sign In</Link> here.
        </p>
      </form>
    </div>
  )
}

SignUp.propTypes = {};

export default memo(SignUp);
