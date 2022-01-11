import React from "react";
import SignUpImg from "./assets/signup-img.svg";
import Logo from "../../assets/logo.svg";
import "./index.scss";
import { Link } from "react-router-dom";

const SignUp = () => (
  <main className="signup-wrapper">
    <div className="signup-form">
      <form>
        <img className="logo" src={Logo} alt="logo" />
        <div className="form-group">
          <input type="text" id="business-name" placeholder="Business Name" />
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="submit">Sign Up</button>
        <br />
        <br />
        Already have an account? <Link to="/login">Log in</Link>
      </form>
    </div>
    <div className="signup-cover">
      <img src={SignUpImg} alt="signup-cover-art" />
    </div>
  </main>
);

export default SignUp;
