import { motion } from "framer-motion";
import { FaArrowLeft, FaMusic, FaCalendarAlt, FaClock } from "react-icons/fa";
import "./LyricDetail.css";

const LyricDetail = ({ song, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lyric-detail"
    >
      <div className="lyric-detail-image-container">
        <img
          src={song.coverArt}
          alt={`${song.title} cover`}
          className="lyric-detail-image"
        />
        <button onClick={onBack} className="lyric-detail-back-button">
          <FaArrowLeft />
        </button>
      </div>
      <div className="lyric-detail-content">
        <h1 className="lyric-detail-title">{song.title}</h1>
        <h2 className="lyric-detail-subtitle">{song.artist}</h2>

        <div className="lyric-detail-meta">
          <div className="lyric-detail-meta-item">
            <FaMusic className="lyric-detail-meta-icon" />
            <span>{song.genre}</span>
          </div>
          <div className="lyric-detail-meta-item">
            <FaCalendarAlt className="lyric-detail-meta-icon" />
            <span>{song.year}</span>
          </div>
          <div className="lyric-detail-meta-item">
            <FaClock className="lyric-detail-meta-icon" />
            <span>{song.duration}</span>
          </div>
        </div>

        <div className="lyric-container">
          <h3 className="lyric-title">Lyrics</h3>
          <pre className="lyric-text">{song.lyrics}</pre>
        </div>
      </div>
    </motion.div>
  );
};

export default LyricDetail;
