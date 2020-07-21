import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions/jobActions";

const SearchForm = ({ fetchData }) => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    fetchData(params, page, cancelToken);

    return () => {
      cancelToken.cancel();
    };
  }, [params, page]);
  return <form></form>;
};

const actions = { fetchData };
export default connect(null, actions)(SearchForm);
