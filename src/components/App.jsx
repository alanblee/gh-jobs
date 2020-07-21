import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import SearchForm from "./jobSearch/jobSearchForm";
import JobContainer from "./jobContainer/jobContainer";

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <JobContainer />
      </div>
    );
  }
}

// const actions = {
//   fetchData,
// };
export default compose(connect(null, null))(App);
