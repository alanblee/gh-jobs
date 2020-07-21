import React from "react";
import ReactMarkdown from "react-markdown";

const JobCard = ({ job }) => {
  return (
    <div className="container-card">
      <div className="description">
        <div className="job-title">
          <p>
            {job.title} - <span className="text-muted">{job.company}</span>
          </p>
        </div>
        <div className="sub-title text-muted">
          <p>{new Date(job.created_at).toLocaleDateString()}</p>
        </div>
        <div className="job-badge">
          <p>{job.type}</p>
          <p>{job.location}</p>
        </div>
        <div className="how-to-apply">
          <ReactMarkdown source={job.how_to_apply} />
        </div>
        <div className="more-info">
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
