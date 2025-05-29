import { motion } from "framer-motion";
import { FaMusic, FaClock } from "react-icons/fa";
import "./LyricCard.css";

const LyricCard = ({ song, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="lyric-card"
      onClick={onClick}
    >
      <div className="lyric-card-image-container">
        <img
          src={song.coverArt}
          alt={`${song.title} cover`}
          className="lyric-card-image"
        />
        <div className="lyric-card-overlay">
          <h3 className="lyric-card-title">{song.title}</h3>
          <p className="lyric-card-artist">{song.artist}</p>
        </div>
      </div>
      <div className="lyric-card-content">
        <div className="lyric-card-meta">
          <span className="lyric-card-meta-item">
            <FaMusic className="lyric-card-meta-icon" />
            {song.genre}
          </span>
          <span className="lyric-card-meta-item">
            <FaClock className="lyric-card-meta-icon" />
            {song.duration}
          </span>
        </div>
        <p className="lyric-card-preview line-clamp-2">
          {song.lyrics.split("\n")[0]}
        </p>
      </div>
    </motion.div>
  );
};

export default LyricCard;
