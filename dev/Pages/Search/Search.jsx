import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./Search.scss";

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='Search container'>
      <h4>Searching:</h4>
      <ul>
        <li>Titulo: {searchParams.get("title")}</li>
        <li>Categoria: {searchParams.get("category")}</li>
      </ul>
    </div>
  );
};

export default Search;
