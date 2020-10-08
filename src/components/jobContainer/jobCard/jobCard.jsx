import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Card, Badge, Button, Collapse } from "react-bootstrap";

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => {
      return !prevOpen;
    });
  };

  const handleSave = (jobToSave) => {
    const jobInfo = {
      title: jobToSave.title,
      company: jobToSave.company,
      posted_date: jobToSave.created_at,
      type: jobToSave.type,
      location: jobToSave.location,
      how_to_apply: jobToSave.how_to_apply,
      company_logo: jobToSave.company_logo,
      job_post_id: jobToSave.id,
      description: jobToSave.description,
    };
  };
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary mr-2">{job.type}</Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBreak: "break-all" }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            src={job.company_logo}
            alt={`${job.company} logo`}
          />
        </div>
        <Card.Text>
          <Button variant="primary" onClick={() => handleOpen()}>
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>

      <button onClick={() => handleSave(job)}>save job</button>
    </Card>
  );
};

export default JobCard;
