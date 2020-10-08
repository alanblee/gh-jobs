import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import PrivateRoute from "../utils/privateRoute";
import AuthForm from "./authForms/authForm";
import Dashboard from "./dashboard/dashboard";
import { Container } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={AuthForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Container>
    );
  }
}

export default compose(connect(null, null))(App);
