import React from "react";
import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NavList from "./navList";
import JobContainer from "../jobContainer/jobContainer";

const Dashboard = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <NavList url={url} />

      <NavLink to={`${url}/search`}>render</NavLink>

      <Route path={`${path}/search`} render={() => <JobContainer />} />
    </div>
  );
};

const mapState = (state) => ({
  loggedIn: state.auth.loggedIn,
});
export default connect(mapState, null)(Dashboard);
