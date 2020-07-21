import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions/jobActions";

const SearchForm = ({ fetchData }) => {
  const []
  useEffect(() => {
    const cancelToken = axios.cancelToken.source();
    fetchData(params, page, cancelToken);
  }, [params, page]);
  return <form></form>;
};

const actions = { fetchData };
export default connect(null, actions)(SearchForm);
