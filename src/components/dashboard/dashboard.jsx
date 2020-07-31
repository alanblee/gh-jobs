import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavList from "./navList";

const Dashboard = () => {
  return (
    <div>
      <NavList />
    </div>
  );
};

const mapState = (state) => ({
  loggedIn: state.auth.loggedIn,
});
export default connect(mapState, null)(Dashboard);
