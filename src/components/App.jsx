import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import SearchForm from "./jobSearch/jobSearchForm";
import JobContainer from "./jobContainer/jobContainer";
import { Container } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <SearchForm />
        <JobContainer />
      </Container>
    );
  }
}

// const actions = {
//   fetchData,
// };
export default compose(connect(null, null))(App);
