import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions/jobActions";

const SearchForm = ({ fetchData, page }) => {
  const [params, setParams] = useState({});

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const cancelToken2 = axios.CancelToken.source();
    fetchData(params, page, cancelToken, cancelToken2);

    return () => {
      cancelToken.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]);
  return <form></form>;
};

const actions = { fetchData };
const mapState = (state) => ({
  page: state.jobs.page,
});
export default connect(mapState, actions)(SearchForm);
