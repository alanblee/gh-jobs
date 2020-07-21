import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const JobContainer = ({ jobs }) => {
  return (
    <div className="container">
      <h1>hello this is the job container component</h1>
      {jobs.length
        ? jobs.map((job) => {
            return <h1>{job.id}</h1>;
          })
        : null}
    </div>
  );
};

const mapState = (state) => ({
  jobs: state.jobs.jobs,
});
export default connect(mapState, null)(JobContainer);
