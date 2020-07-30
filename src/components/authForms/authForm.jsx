import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const AuthForm = () => {
  return (
    <div className="form-data">
      <form>
        <div className="logo">
          <h3>GH-Jobs</h3>
        </div>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button className="form-btn" type="submit">
          Login
        </button>
        <span className="has-separator">Or</span>
        <Link className="google-login" to="/#">
          <i className="fa fa-google"></i> Login in with Google
        </Link>
      </form>
      <div className="sign-up">
        Don't have an account? <Link>Sign Up</Link>
      </div>
    </div>
  );
};

export default connect(null, null)(AuthForm);
