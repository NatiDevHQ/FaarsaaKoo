import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="search-container">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search songs, artists, or genres..."
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
