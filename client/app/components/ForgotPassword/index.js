import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import Input from 'components/Input/Loadable'
import './index.css'

function ForgotPassword() {
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
        <Input label="Email" type="text" placeholder="Enter Your Email" autocomplete="username"/>

        <button type='submit' className='button'>Send Reset Email</button>
      </form>
    </div>
  )
}

ForgotPassword.propTypes = {};

export default memo(ForgotPassword);
