import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JobCard from "./jobCard/jobCard";

const JobContainer = ({ jobs, loading, error }) => {
  const renderJobs = () => {
    jobs.map((job) => {
      return <JobCard key={job.id} job={job} />;
    });
  };
  return (
    <div className="container">
      {loading ? "Loading..." : null}
      {error ? error : null}

      {jobs.length ? renderJobs() : null}
    </div>
  );
};

const mapState = (state) => ({
  jobs: state.jobs.jobs,
  loading: state.jobs.loading,
  error: state.jobs.error,
});
export default connect(mapState, null)(JobContainer);
