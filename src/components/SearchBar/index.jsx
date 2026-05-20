import { useState } from "react";

const SearchBar = ({ setEntry }) => {

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
    <div>
      <input
        type="text"
        placeholder="Buscar película..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        🔍
      </button>

    </div>
  );
};

export default SearchBar;