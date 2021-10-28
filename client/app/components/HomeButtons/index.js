import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const style = {
  width: "480px",
  height: "800px",
  background: "red",
  margin: " 0 auto",
  marginTop: "10vh"
}

function HomeButtons() {
  return (
    <div className="container">
      <div>
        <h1 className="container_heading">Authentication API</h1>

        <p>
          Welcome to my Authentication Project.
          Use the buttons below to create and then log in to your account.
          Note that this is just a demo project.
        </p>
      </div>

      <div className="button_container">
        <Link to="/login">
          <button className="button home_btn">Sign In</button>
        </Link>

        <Link to="/register">
          <button className="button home_btn">Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

HomeButtons.propTypes = {};

export default memo(HomeButtons);
