import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getUser,
  registerUser,
  loginUser,
} from "../../redux/actions/authActions";

const AuthForm = ({ loggedIn, getUser, registerUser, loginUser }) => {
  const { push } = useHistory();
  const [newUser, setNewUser] = useState(false);
  const [formInput, setFormInput] = useState({});

  useEffect(() => {
    getUser(() => {
      push("/job-search");
    });
  }, []);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newUser) {
      loginUser(formInput, () => {
        push("/job-search");
      });
    } else {
      registerUser(formInput);
      setNewUser(!newUser);
    }
  };
  const toggleUser = () => {
    setNewUser(!newUser);
  };
  return (
    <div className="form-data">
      <form onSubmit={handleSubmit}>
        <div className="logo">
          <h3>GH-Jobs</h3>
        </div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="form-btn" type="submit">
          {!newUser ? <>Login</> : <> Sign Up</>}
        </button>
        <span className="has-separator">Or</span>
        <Link className="google-login" to="#">
          <i className="fa fa-google"></i> Login in with Google
        </Link>
      </form>
      <div className="sign-up">
        {!newUser ? (
          <>
            Don't have an account?{" "}
            <Link to="#" onClick={toggleUser}>
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link to="#" onClick={toggleUser}>
              Log In
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  loggedIn: state.auth.loggedIn,
});
const actions = {
  getUser,
  loginUser,
  registerUser,
};
export default connect(mapState, actions)(AuthForm);
