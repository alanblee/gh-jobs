import React from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import { updatePage } from "../../redux/actions/jobActions";

const JobPagination = ({ page, hasNextPage, updatePage }) => {
  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={() => updatePage(page - 1)} />}
      {page !== 1 && (
        <Pagination.Item onClick={() => updatePage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && (
        <Pagination.Item onClick={() => updatePage(page - 1)}>
          {page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && (
        <Pagination.Item onClick={() => updatePage(page + 1)}>
          {page + 1}
        </Pagination.Item>
      )}

      {hasNextPage && <Pagination.Next onClick={() => updatePage(page + 1)} />}
    </Pagination>
  );
};

const mapState = (state) => ({
  page: state.jobs.page,
  hasNextPage: state.jobs.hasNextPage,
});
const actions = {
  updatePage,
};
export default connect(mapState, actions)(JobPagination);
