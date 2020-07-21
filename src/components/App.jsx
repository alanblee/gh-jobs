import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchData } from "../redux/actions/jobActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return <div>hellow world</div>;
  }
}

const actions = {
  fetchData,
};

export default compose(connect(null, actions))(App);
