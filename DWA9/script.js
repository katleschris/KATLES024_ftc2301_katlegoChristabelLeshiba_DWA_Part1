class BookPreview extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const { book } = this.dataset;
  
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
        this.style.display = 'none';
      });
      details.appendChild(closeButton);
  
      const styles = `
        .preview-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 999;
          padding: 5rem;
        }
  
        .preview-image {
          max-width: 100%;
          max-height: 100%;
        }
  
        .preview-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          color: white;
        }
      `;
  
      const styleElement = document.createElement('style');
      styleElement.textContent = styles;
  
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(styleElement);
      this.shadowRoot.appendChild(previewContainer);
    }
  }
  
  customElements.define('book-preview', BookPreview);
  