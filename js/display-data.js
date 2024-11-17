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

export function displayData(movies) {
  if (!dataContainer) {
    console.error('Data container element not found');
    return;
  }

  clearDataContainer();//wee have to do an if or something on if it is the search or if i am clicking the button. because i want this to not happen when i click the button but i want it to happen when i do the search thing!

  const sampleCard = document.getElementById('sample-card');
  if (!sampleCard) {
    console.error('Sample card element not found');
    return;
  }

  movies.forEach((movie) => {
    const card = sampleCard.cloneNode(true);
    card.removeAttribute('id');
    card.style.display = 'flex';
    const title = card.querySelector('.card-title');
    title.textContent = movie.Title;
    const poster = card.querySelector('.card-poster');
    poster.src = movie.Poster !== 'N/A' ? movie.Poster : 'images/placeholder.png';
    card.addEventListener('click', () => showMovieDetails(movie));
    dataContainer.appendChild(card);
  });
}