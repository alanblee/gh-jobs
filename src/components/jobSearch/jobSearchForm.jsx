import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Form, Col } from "react-bootstrap";
import { fetchData, updatePage } from "../../redux/actions/jobActions";

const SearchForm = ({ fetchData, page, updatePage }) => {
  const [params, setParams] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    updatePage(1);
    setParams((prevParams) => {
      return { ...prevParams, [name]: value };
    });
  };
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const cancelToken2 = axios.CancelToken.source();
    fetchData(params, page, cancelToken, cancelToken2);

    return () => {
      cancelToken.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]);
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={params.description}
            name="description"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={params.location}
            name="location"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            className="mg-2"
            onChange={handleChange}
            value={params.full_time}
            name="full_time"
            id="full_time"
            label="Only Full Time"
            type="checkbox"
          ></Form.Check>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

const actions = { fetchData, updatePage };
const mapState = (state) => ({
  page: state.jobs.page,
});
export default connect(mapState, actions)(SearchForm);
