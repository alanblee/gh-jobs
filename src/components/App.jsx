import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchData } from "../redux/actions/jobActions";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchData();
  // }
  render() {
    return <div>{this.jobs ? console.log(this.props.jobs) : null}</div>;
  }
}

const actions = {
  fetchData,
};
const mapState = (state) => ({
  jobs: state.jobs,
});
export default compose(connect(mapState, actions))(App);
