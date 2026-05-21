import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setEntry }) => {

  const clearInput = () => {

  setInput("");

  setEntry("shrek");

  };

  const [input, setInput] = useState("");
  const handleSearch = () => {
    if (input.trim() !== "") {
      setEntry(input);
    }

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
  <div className="search">

    <h1 className="search__title"
        onClick={() => {

    setInput("");

    setEntry("shrek");

     }}
    >
      lucho y nao son re capos
    </h1>

    <div className="search__box">

      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search__input"
      />

     <div className="search__actions">

  {
    input && (

      <button
        onClick={clearInput}
        className="search__clear"
      >
        ✕
      </button>

    )
  }

  <button
    onClick={handleSearch}
    className="search__button"
  >
    🔍
  </button>

</div>

    </div>

  </div>
);
};

export default SearchBar;