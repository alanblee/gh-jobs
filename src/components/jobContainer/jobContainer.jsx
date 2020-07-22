import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import JobCard from "./jobCard/jobCard";
import JobsPagination from "../jobsPagination/jobsPagination";

const JobContainer = ({ jobs, loading, error }) => {
  const renderJobs = () => {
    return jobs.map((job) => {
      return <JobCard key={job.id} job={job} />;
    });
  };
  return (
    <Container className="my-4">
      <JobsPagination />
      {loading ? "Loading..." : null}
      {error ? error : null}
      {jobs.length ? renderJobs() : null}
      <JobsPagination />
    </Container>
  );
};

const mapState = (state) => ({
  jobs: state.jobs.jobs,
  loading: state.jobs.loading,
  error: state.jobs.error,
});
export default connect(mapState, null)(JobContainer);
