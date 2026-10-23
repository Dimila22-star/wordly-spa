# Wordly - Interactive Dictionary Single Page Application (SPA)

## Overview
**Wordly** is an interactive Single Page Application (SPA) dictionary built with semantic HTML5, modern CSS3, and vanilla JavaScript. It integrates with the public [Free Dictionary API](https://dictionaryapi.dev/) to let language learners look up words, listen to audio pronunciations, read definitions and example sentences, explore clickable synonyms, and bookmark favorite words—all without reloading the page.

## Features (Task 1 & Task 2)
- **Instant Word Search**: Form validation handles empty queries, whitespace, and invalid characters gracefully.
- **Rich Dictionary Data**: Displays phonetic spelling, parts of speech, definitions, example sentences, and source links.
- **Audio Pronunciation**: Automatically detects valid `.mp3` pronunciation streams from the API and provides fallback messaging when audio is unavailable.
- **Interactive Synonyms**: Clicking any synonym chip immediately triggers a lookup for that word.
- **Saved Words & Dynamic CSS Styling**: Users can bookmark favorite words (saved in `localStorage`). Saved words receive a golden highlight border on the card, and users can toggle between **Light Mode** and **Dark Mode**.

## API Data Structure Used
Endpoint: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
- `word`: String (the searched word)
- `phonetic` / `phonetics[].text`: String (IPA pronunciation)
- `phonetics[].audio`: String (URL to MP3 pronunciation file)
- `meanings[].partOfSpeech`: String (`noun`, `verb`, `adjective`, etc.)
- `meanings[].definitions[].definition`: String
- `meanings[].definitions[].example`: String
- `meanings[].synonyms`: Array of Strings
- `sourceUrls`: Array of Strings

## Running Locally
1. Clone this repository.
2. Open the folder in VS Code.
3. Open `index.html` in your browser (or right-click `index.html` -> **Open with Live Server**).