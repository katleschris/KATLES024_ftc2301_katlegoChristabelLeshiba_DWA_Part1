import { BOOKS_PER_PAGE, authors, genres, books } from './data.js';

const elements = {
  bookList: document.querySelector('[data-list-items]'),
  searchInput: document.querySelector('.search-input'),
  modeButton: document.querySelector('.mode-button'),
  blueButton: document.querySelector('[data-list-button]'),
  dialog: document.querySelector('[data-search-overlay]'),
  cancelButton: document.querySelector('[data-search-cancel]'),
  genreList: document.querySelector('[data-search-genres]'),
  authorList: document.querySelector('[data-search-authors]'),
  searchButton: document.querySelector('[search-button]'),
  titleInput: document.querySelector('[data-search-title]'),
  genreSelect: document.querySelector('[data-search-genres]'),
  authorSelect: document.querySelector('[data-search-authors]'),
  resultContainer: document.querySelector('[data-search-results]'),
  themeButton: document.querySelector('[data-header-settings]'),
  themeDialog: document.querySelector('[data-settings-overlay]'),
  themeCancelButton: document.querySelector('[data-settings-cancel]'),
  applyButton: document.querySelector('[apply-theme]')
};

let currentPage = 1;
let currentBooks = [];

function determineNumBooksPerRow(screenWidth) {
  if (screenWidth < 600) {
    return 1;
  } else if (screenWidth < 960) {
    return 2;
  } else if (screenWidth < 1300) {
    return 3;
  } else {
    return 4;
  }
}

function calculateBookWidth(numBooksPerRow) {
  const screenWidth = window.innerWidth;
  return (screenWidth / numBooksPerRow) - 20;
}

function clearElement(element) {
  element.replaceChildren();
}

function createBookElement(book) {
  const bookItem = document.createElement("div");
  bookItem.style.width = `${bookWidth}px`;
  bookItem.style.height = "auto";
  bookItem.style.padding = "10px";
  bookItem.style.boxSizing = "border-box";
  bookItem.style.display = "grid";
  bookItem.style.gridTemplateColumns = "1fr 1fr";
  bookItem.style.gridGap = "20px";

    const imageDiv = document.createElement("div");
    const titleAuthorDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = picture;
    img.style.width = "100%";
    img.style.height = "auto";

    imageDiv.appendChild(img);

    titleDiv.textContent = title;
    titleDiv.style.fontSize = "1.5rem";
    titleDiv.style.marginBottom = "0.5rem";
    titleDiv.style.marginTop = "0.5rem";

    authorDiv.textContent = author;
    authorDiv.style.fontSize = "1rem";
    authorDiv.style.marginTop = "0.5rem";

    titleAuthorDiv.appendChild(titleDiv);
    titleAuthorDiv.appendChild(authorDiv);
    titleAuthorDiv.style.display = "flex";
    titleAuthorDiv.style.flexDirection = "column";

    bookItem.appendChild(imageDiv);
    bookItem.appendChild(titleAuthorDiv);

    // Add a click event listener to each bookItem
    bookItem.addEventListener('click', () => {
        // Create and display the preview for the clicked bookItem
        const preview = createBookPreview(books[i]);
      });

  return bookItem;
}


function createBookPreview(book) {
    // Create preview container
    const preview = document.createElement('div');
    preview.classList.add('preview-container');
  
    // Create preview image
    const img = document.createElement('img');
    img.src = book.image;
    img.classList.add('preview-image');
    preview.appendChild(img);
  
    // Create preview details
    const details = document.createElement('div');
    details.classList.add('preview-details');
  
    // Create title element
    const title = document.createElement('h3');
    title.textContent = book.title;
    title.classList.add('preview-title');
    details.appendChild(title);
  
    // Create author element
    const authorCode = book.author;
    const author = document.createElement('p');
    author.textContent = `By ${authors[authorCode]}`;
    author.classList.add('preview-author');
    details.appendChild(author);
  
    // Create published element
    const published = document.createElement('p');
    published.textContent = `Published on ${book.published}`;
    published.classList.add('preview-published');
    details.appendChild(published);
  
    // Create description element
    const description = document.createElement('p');
    description.textContent = book.description;
    description.classList.add('preview-description');
    details.appendChild(description);
  
    // Add details to preview container
    preview.appendChild(details);
  
    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.style.backgroundColor = 'blue';
    closeButton.style.color = 'white';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      preview.style.display = 'none';
    });
    details.appendChild(closeButton);
  
    // Style preview container using CSS
    preview.style.display = 'flex';
    preview.style.alignItems = 'center';
    preview.style.justifyContent = 'center';
    preview.style.position = 'fixed';
    preview.style.top = '0';
    preview.style.left = '0';
    preview.style.width = '100%';
    preview.style.height = '100%';
    preview.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    preview.style.zIndex = '999';
    preview.style.padding = '5rem'
  
    // Style preview image
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
  
    // Style preview details
    details.style.display = 'flex';
    details.style.flexDirection = 'column';
    details.style.justifyContent = 'center';
    details.style.alignItems = 'center';
    details.style.padding = '20px';
    details.style.color = 'white';
  
    return preview;
  }

function renderBookList() {
  const screenWidth = window.innerWidth;
  const numBooksPerRow = determineNumBooksPerRow(screenWidth);
  const bookWidth = calculateBookWidth(numBooksPerRow);

  clearElement(elements.bookList);

  for (let i = 0; i < BOOKS_PER_PAGE * currentPage; i++) {
    const picture = books[i].image;
    const title = books[i].title;
    const authorCode = books[i].author;
    const author = authors[authorCode];
    const bookItem = createBookElement(books[i]);
    
    elements.bookList.appendChild(bookItem);
  }
}


function searchBooks() {
  const titleText = elements.titleInput.value;
  const genreText = elements.genreSelect.value;
  const authorText = elements.authorSelect.value;

  // filter books based on the provided parameters
  const filteredBooks = books.filter(book => {
    const titleMatch = book['title'].toLowerCase().includes(titleText.toLowerCase());
    const genreMatch = book['genres'].includes(genreText.toLowerCase());
    const authorMatch = book['author'].toLowerCase().includes(authorText.toLowerCase());

   
    return titleMatch && genreMatch && authorMatch;
  });

  return filteredBooks;
}

function renderFilteredBooks(booksToRender) {
    const screenWidth = window.innerWidth;
    const numBooksPerRow = determineNumBooksPerRow(screenWidth);
    const bookWidth = calculateBookWidth(numBooksPerRow);
  
    clearElement(elements.bookList);
  
    for (let i = 0; i < booksToRender.length; i++) {
      const bookItem = createBookElement(booksToRender[i]);
      elements.bookList.appendChild(bookItem);
    }
  }

function toggleTheme() {
  const body = document.querySelector('body');
  const header = document.querySelector('.list');
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    header.style.backgroundColor = '#f5f5f5';
    header.style.color = '#212121';
    
  } else {
    body.classList.add('dark-theme');
    header.style.backgroundColor = '#212121';
    header.style.color = '#f5f5f5';
    
  }
}

// add functionality to button
const blueButton = document.querySelector('[data-list-button]');
blueButton.textContent = 'Show more'
blueButton.addEventListener('click', () => {
  currentPage += 1;
  renderBookList();
})

//show form when clicking search button
const button = document.querySelector('[data-header-search]');
const dialog = document.querySelector('[data-search-overlay]');

button.addEventListener('click', () => {
  dialog.setAttribute('open', true);
});

const cancelButton = document.querySelector('[data-search-cancel]');

cancelButton.addEventListener('click', () => {
  dialog.removeAttribute('open');
});

// add author and genre list to form
const genreList = document.querySelector('[data-search-genres]');
for (const [key, value] of Object.entries(genres)) {
  const option = document.createElement('option');
  option.value = key;
  option.text = value;
  genreList.appendChild(option);
}

const authorList = document.querySelector('[data-search-authors]');
for (const [key, value] of Object.entries(authors)) {
  const option = document.createElement('option');
  option.value = key;
  option.text = value;
  authorList.appendChild(option);
}

// add event listener to search in form button to filter books
const searchButton = document.querySelector('[search-button]');
const titleInput = document.querySelector('[data-search-title]');
const genreSelect = document.querySelector('[data-search-genres]');
const authorSelect = document.querySelector('[data-search-authors]');
const resultContainer = document.querySelector('[data-search-results]');

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    //search and render filtered book list
    const booksToRender = searchBooks();
    console.log(booksToRender)
   renderFilteredBooks(booksToRender);
   dialog.removeAttribute('open');
});

  // toggle between dark and light mode
  const themeButton = document.querySelector('[data-header-settings]');
  const themeDialog = document.querySelector('[data-settings-overlay]');
  
  themeButton.addEventListener('click', () => {
    themeDialog.setAttribute('open', true);
  });
  
  const themeCancelButton = document.querySelector('[data-settings-cancel]');
  
  themeCancelButton.addEventListener('click', () => {
    themeDialog.removeAttribute('open');
  });

  const apply = document.querySelector('[apply-theme]')
  apply.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTheme();
    themeDialog.removeAttribute('open');
  })