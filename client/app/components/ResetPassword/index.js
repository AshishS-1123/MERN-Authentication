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
        Reset Password
      </h1>


      <form className="form">
        <Input label="Password" type="text" placeholder="Enter Your New Password" autocomplete="password"/>
        <Input label="Retype Password" type="text" placeholder="Enter Your Password Again" autocomplete="password"/>

        <button type='submit' className='button'>Update Password</button>
      </form>
    </div>
  )
}

ForgotPassword.propTypes = {};

export default memo(ForgotPassword);
