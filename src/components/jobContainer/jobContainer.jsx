import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JobCard from "./jobCard/jobCard";
const JobContainer = ({ jobs }) => {
  return (
    <div className="container">
      {jobs.length
        ? jobs.map((job) => {
            return <JobCard key={job.id} job={job} />;
          })
        : null}
    </div>
  );
};

const mapState = (state) => ({
  jobs: state.jobs.jobs,
});
export default connect(mapState, null)(JobContainer);
