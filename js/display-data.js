import { showMovieDetails } from './modal-handling.js';

export const dataContainer = document.getElementById('card-grid');

export function clearDataContainer() {
  if (!dataContainer) {
    console.error('Data container element not found');
    return;
  }
  const children = Array.from(dataContainer.children);
  children.forEach((child) => {
    if (child.id !== 'sample-card') {
      dataContainer.removeChild(child);
    }
  });
}

export async function displayData(movies) {
  if (!dataContainer) {
    console.error('Data container element not found');
    return;
  }

  const sampleCard = document.getElementById('sample-card');
  if (!sampleCard) {
    console.error('Sample card element not found');
    return;
  }

  const promises = movies.map(async (movie) => {
    const card = sampleCard.cloneNode(true);
    card.removeAttribute('id');
    card.style.display = 'flex';

    const title = card.querySelector('.card-title');
    title.textContent = movie.Title;

    const poster = card.querySelector('.card-poster');
    const placeholderSrc = 'images/placeholder.png';
    const actualPosterSrc = movie.Poster !== 'N/A' ? movie.Poster : placeholderSrc;

    await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        poster.src = actualPosterSrc;
        resolve();
      };
      img.onerror = () => {
        poster.src = placeholderSrc;
        resolve();
      };
      img.src = actualPosterSrc;
    });

    card.addEventListener('click', () => showMovieDetails(movie));
    return card;
  });

  const cards = await Promise.all(promises);

  cards.forEach((card) => dataContainer.appendChild(card));
}
