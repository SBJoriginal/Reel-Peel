import { showMovieDetails } from './modal-handling.js';

export function displayData(movies) {
    const dataContainer = document.getElementById('card-grid');
    if (!dataContainer) {
      console.error('Data container element not found');
      return;
    }
    movies.forEach((movie) => {
      const sampleCard = document.getElementById('sample-card');
      if (!sampleCard) {
        console.error('Sample card element not found');
        return;
      }
      const card = sampleCard.cloneNode(true);
      card.removeAttribute('id');
      card.style.display = 'flex';
      const title = card.querySelector('.card-title');
      title.textContent = movie.Title;
      const poster = card.querySelector('.card-poster');
      poster.src = movie.Poster;
      card.addEventListener('click', () => showMovieDetails(movie));
      dataContainer.appendChild(card);
    });
  }
