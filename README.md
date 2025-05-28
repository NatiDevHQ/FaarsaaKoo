# FaarsaaKoo

# Lyrics Finder App - React Implementation

## Overview

Lyrics Finder is a responsive React web application that allows users to browse and search song lyrics with a clean, modern interface. The app features real-time search functionality, detailed song views, and a dark/light mode toggle.

## Features

- **Lyrics Browser**: Display songs as cards with album art, title, artist, and preview
- **Detailed View**: Click any card to see full lyrics and song metadata
- **Real-time Search**: Filter songs by title, artist, or genre as you type
- **Responsive Design**: Works on all screen sizes from mobile to desktop
- **Dark/Light Mode**: Toggle between color schemes based on user preference
- **Animations**: Smooth transitions between views with Framer Motion

## Technologies Used

- React (functional components with hooks)
- Framer Motion (for animations)
- React Icons (for SVG icons)
- Plain CSS (no CSS frameworks)
- Local data storage (no backend required)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/lyrics-finder.git
```

2. Navigate to the project directory:
```bash
cd lyrics-finder
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser to `http://localhost:3000`

## Project Structure

```
src/
├── components/          # React components
│   ├── LyricCard/       # Song card component
│   ├── LyricDetail/     # Detailed song view
│   └── SearchBar/       # Search functionality
├── data/                # Mock data
├── App.js               # Main application component
├── App.css              # Global styles
├── index.js             # Entry point
└── index.css            # Base styles
```

## Customization

### Adding More Songs

To add more songs to the app, edit the `src/data/lyricsData.js` file following the existing structure:

```javascript
{
  id: 6,  // Unique ID
  title: "Song Title",
  artist: "Artist Name",
  album: "Album Name",
  lyrics: "Lyrics line 1\nLyrics line 2\n...",  // Use \n for line breaks
  year: 2023,  // Release year
  genre: "Genre",
  coverArt: "URL_TO_IMAGE",  // Direct image URL
  duration: "3:45"  // Duration in MM:SS format
}
```

### Styling Changes

The app uses plain CSS organized by component. To modify styles:

1. Edit the corresponding CSS file in the component's directory
2. Global styles can be modified in `src/App.css` and `src/index.css`

### Dark Mode Customization

Dark mode colors are defined in each component's CSS file using the `.dark` selector. For example:

```css
/* Light mode */
.lyric-card {
  background-color: white;
}

/* Dark mode */
.dark .lyric-card {
  background-color: #1f2937;
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- react-icons: ^4.7.1
- framer-motion: ^10.12.4

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This app uses mock data and doesn't connect to any external API. For a production app, you would want to connect to a lyrics API service.

Enjoy exploring the Lyrics Finder app!
