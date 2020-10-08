import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import NavList from "./navList";
import JobContainer from "../jobContainer/jobContainer";

const Dashboard = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <NavList url={url} />
      <Route path={`${path}/job-search`} render={() => <JobContainer />} />
      <Route path={`${path}/profile`} render={() => <JobContainer />} />
    </div>
  );
};

const mapState = (state) => ({
  loggedIn: state.auth.loggedIn,
});
export default connect(mapState, null)(Dashboard);
