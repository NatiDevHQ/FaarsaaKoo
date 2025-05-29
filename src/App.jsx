import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lyricsData } from "./data/lyricsData";
import LyricCard from "./components/LyricCard/LyricCard";
import LyricDetail from "./components/LyricDetail/LyricDetail";
import SearchBar from "./components/SearchBar/SearchBar";
import { FaMoon, FaSun } from "react-icons/fa";
import "./App.css";

function App() {
  const [songs, setSongs] = useState(lyricsData);
  const [filteredSongs, setFilteredSongs] = useState(lyricsData);
  const [selectedSong, setSelectedSong] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredSongs(songs);
      return;
    }

    const filtered = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.genre.toLowerCase().includes(query)
    );

    setFilteredSongs(filtered);
  };

  const handleCardClick = (song) => {
    setSelectedSong(song);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedSong(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <div className="main-container">
        <header className="header">
          <h1 className="app-title">Lyrics Finder</h1>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>

        <AnimatePresence mode="wait">
          {selectedSong ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LyricDetail song={selectedSong} onBack={handleBackClick} />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SearchBar onSearch={handleSearch} />

              {filteredSongs.length === 0 ? (
                <div className="no-results">
                  <p className="no-results-text">
                    No songs found. Try a different search.
                  </p>
                </div>
              ) : (
                <div className="songs-grid">
                  {filteredSongs.map((song) => (
                    <LyricCard
                      key={song.id}
                      song={song}
                      onClick={() => handleCardClick(song)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
