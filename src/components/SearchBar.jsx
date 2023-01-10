import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchValue, handleChange, filterMovie }) => {
  return (
    <div className='search'>
      <input type='text' placeholder='Search for movie...' name='search' value={searchValue} onChange={handleChange} />
      <AiOutlineSearch
        size='24px'
        onClick={filterMovie}
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default SearchBar;
