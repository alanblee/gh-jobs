import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import JobContainer from "./jobContainer/jobContainer";

class App extends Component {
  render() {
    return <JobContainer />;
  }
}

// const actions = {
//   fetchData,
// };
export default compose(connect(null, null))(App);
