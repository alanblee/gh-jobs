import React from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import { updatePage } from "../../redux/actions/jobActions";

const JobPagination = ({ page, hasNextPage, updatePage }) => {
  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev />}
      {page !== 1 && <Pagination.Item>1</Pagination.Item>}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item>{page - 1}</Pagination.Item>}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item>{page + 1}</Pagination.Item>}

      {hasNextPage && <Pagination.Next />}
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
