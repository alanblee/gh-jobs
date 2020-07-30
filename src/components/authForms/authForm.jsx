import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const AuthForm = () => {
  return (
    <form>
      <label htmlFor="username">username</label>
      <input type="text" name="username" />
      <label htmlFor="password"> password </label>
      <input type="password" name="password" />
    </form>
  );
};

export default connect(null, null)(AuthForm);
