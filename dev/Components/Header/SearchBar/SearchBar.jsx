import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchBarStatus, setSearchBarStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target[1].value;

    navigate("/search/" + searchValue);
  };

  const handlerSearchBarStatus = (e) => {
    e.preventDefault();
    searchBarStatus ? setSearchBarStatus(false) : setSearchBarStatus(true);
  };

  return (
    <div className='SearchBar'>
      <button className='btn SearchBarStatus' onClick={handlerSearchBarStatus}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
      </button>
      <form className={searchBarStatus ? "active" : ""} onSubmit={handleSubmit}>
        <button className='btn SearchBarStatus' onClick={handlerSearchBarStatus}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-arrow-left-short' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z' />
          </svg>
        </button>
        <input className='searchInput' type='search' placeholder='Buscar' />
        <button className='btn searchButton'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
