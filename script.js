const searchForm = document.getElementById('search-form');
const wordInput = document.getElementById('word-input');
const errorMessage = document.getElementById('error-message');
const resultBox = document.getElementById('result-box');

const wordTitle = document.getElementById('word-title');
const wordPhonetic = document.getElementById('word-phonetic');
const partOfSpeech = document.getElementById('part-of-speech');
const definition = document.getElementById('definition');
const example = document.getElementById('example');
const synonyms = document.getElementById('synonyms');
const sourceLink = document.getElementById('source-link');

const saveBtn = document.getElementById('save-btn');
const savedList = document.getElementById('saved-list');
const themeBtn = document.getElementById('theme-btn');

let currentWord = '';
let savedWords = [];

searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop page from refreshing

  const word = wordInput.value.trim().toLowerCase();

  if (word === '') {
    errorMessage.textContent = 'Please type a word in the search box.';
    resultBox.classList.add('hidden');
    return;
  }

  errorMessage.textContent = '';
  fetchWord(word);
});

function fetchWord(word) {
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Word not found. Please check your spelling and try again.');
      }
      return response.json();
    })
    .then(function (data) {
      displayWord(data[0]);
    })
    .catch(function (error) {
      resultBox.classList.add('hidden');
      errorMessage.textContent = error.message;
    });
}

function displayWord(wordData) {
  currentWord = wordData.word;
  resultBox.classList.remove('hidden');
  resultBox.classList.remove('saved-highlight');

  wordTitle.textContent = wordData.word;
  wordPhonetic.textContent = wordData.phonetic || 'Not available';

  const firstMeaning = wordData.meanings[0];
  const firstDef = firstMeaning.definitions[0];

  partOfSpeech.textContent = firstMeaning.partOfSpeech;
  definition.textContent = firstDef.definition;
  example.textContent = firstDef.example || 'No example provided.';

  if (firstMeaning.synonyms && firstMeaning.synonyms.length > 0) {
    synonyms.textContent = firstMeaning.synonyms.slice(0, 5).join(', ');
  } else {
    synonyms.textContent = 'No synonyms listed.';
  }

  if (wordData.sourceUrls && wordData.sourceUrls.length > 0) {
    sourceLink.href = wordData.sourceUrls[0];
  } else {
    sourceLink.href = 'https://dictionaryapi.dev/';
  }
}

saveBtn.addEventListener('click', function () {
  if (currentWord === '') return;

  resultBox.classList.add('saved-highlight');

  if (!savedWords.includes(currentWord)) {
    savedWords.push(currentWord);

    const li = document.createElement('li');
    li.textContent = currentWord;
    savedList.appendChild(li);
  }
});

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = 'Light Mode';
  } else {
    themeBtn.textContent = 'Dark Mode';
  }
});