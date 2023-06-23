function createBookPreview(book) {
    const previewContainer = document.createElement('div');
    previewContainer.classList.add('preview-container');
  
    const img = document.createElement('img');
    img.src = book.image;
    img.classList.add('preview-image');
    previewContainer.appendChild(img);
  
    const details = document.createElement('div');
    details.classList.add('preview-details');
  
    const title = document.createElement('h3');
    title.textContent = book.title;
    title.classList.add('preview-title');
    details.appendChild(title);
  
    const authorCode = book.author;
    const author = document.createElement('p');
    author.textContent = `By ${authors[authorCode]}`;
    author.classList.add('preview-author');
    details.appendChild(author);
  
    const published = document.createElement('p');
    published.textContent = `Published on ${book.published}`;
    published.classList.add('preview-published');
    details.appendChild(published);
  
    const description = document.createElement('p');
    description.textContent = book.description;
    description.classList.add('preview-description');
    details.appendChild(description);
  
    previewContainer.appendChild(details);
  
    const closeButton = document.createElement('button');
    closeButton.style.backgroundColor = 'blue';
    closeButton.style.color = 'white';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      previewContainer.style.display = 'none';
    });
    details.appendChild(closeButton);
  
    // Public interface of the book preview
    return {
      render: function (container) {
        previewContainer.style.display = 'flex';
        previewContainer.style.alignItems = 'center';
        previewContainer.style.justifyContent = 'center';
        previewContainer.style.position = 'fixed';
        previewContainer.style.top = '0';
        previewContainer.style.left = '0';
        previewContainer.style.width = '100%';
        previewContainer.style.height = '100%';
        previewContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        previewContainer.style.zIndex = '999';
        previewContainer.style.padding = '5rem';
  
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
  
        details.style.display = 'flex';
        details.style.flexDirection = 'column';
        details.style.justifyContent = 'center';
        details.style.alignItems = 'center';
        details.style.padding = '20px';
        details.style.color = 'white';
  
        container.appendChild(previewContainer);
      },
    };
  }
  