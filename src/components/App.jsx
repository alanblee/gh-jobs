import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import JobContainer from "./jobContainer/jobContainer";
import { Container } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <JobContainer />
      </Container>
    );
  }
}

export default compose(connect(null, null))(App);
