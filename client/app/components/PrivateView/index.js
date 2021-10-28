import React, { memo } from 'react'

const div_styles = {
  width: "100vw",
  color: "white",
  fontFamily: "Acme",
  fontSize: "80px",
  textAlign: "center",
  position: "absolute",
  top: "40%",
  transform: "translateY(-50%)"
}

const p_styles = {
  fontSize: "20px",
  fontFamily: "KleeRegular"
}

function PrivateView() {
  return (
    <div style={div_styles}>
      Yay! You Managed To Log In.
      <p style={p_styles}>
        If you have any thoughts or comments, drop me a email at &nbsp;
        <a href="mailto:shevaleashish@gmail.com" style={{color: "#aaa", textDecoration: "none"}}>shevaleashish@gmail.com</a> <br />
        Checkout my GitHub profile <a href="github.com/AshishS-1123" style={{color: "#aaa", textDecoration: "none"}}>github.com/AshishS-1123</a><br />
      Also connect with me on LinkedIn (<a href="linkedin.com/in/ashish-shevale" style={{color: "#aaa", textDecoration: "none"}}>linkedin.com/in/ashish-shevale</a>)
      </p>
    </div>
  )
}

PrivateView.propTypes = {};

export default memo(PrivateView);
