import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

class App extends Component {
  render() {
    return <div>hellow world</div>;
  }
}

export default compose(connect(null, null))(App);
