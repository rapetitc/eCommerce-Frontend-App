import React from "react";
import { useParams } from "react-router-dom";
import "./Search.scss";

const Search = () => {
  const { value } = useParams();

  return <div className='Search container'>Searching: {value}</div>;
};

export default Search;
