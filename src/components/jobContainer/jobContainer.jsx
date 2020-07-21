import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const JobContainer = ({ jobs }) => {
  return (
    <div className="container">
      <h1>hello this is the job container component</h1>
      {jobs.length ? console.log(jobs) : console.log("nothing to see here yet")}
    </div>
  );
};

const mapState = (state) => ({
  jobs: state.jobs.jobs,
});
export default connect(mapState, null)(JobContainer);
