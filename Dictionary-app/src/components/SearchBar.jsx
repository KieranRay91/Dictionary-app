import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./SearchBar.css";
import { fetchWordDefinition } from "../../utils";


export const SearchBar = ({ setWordDefinition }) => {
  const [searchWord, setSearchWord] = useState("");

  function handleClick() {
 fetchWordDefinition(searchWord).then((res) => {
    setWordDefinition(res[0])
 })
}

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={searchWord}
        placeholder="Enter a word to search.... "
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button id="search-button" onClick={handleClick}>
        <FaSearch id="search-icon" />
      </button>
    </div>
  );
};

