import { disableScroll, enableScroll } from './scrolling-management.js';

export function showMovieDetails(movie) {
    const modal = document.getElementById('movie-detail-modal');
    const movieTitle = document.getElementById('movie-title');
    const movieRating = document.getElementById('movie-rating');
    const movieGenre = document.getElementById('movie-genre');
    const movieYear = document.getElementById('movie-year');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieLanguage = document.getElementById('movie-language');
    const moviePlot = document.getElementById('movie-plot');
    const movieDirector = document.getElementById('movie-director');
    const movieActors = document.getElementById('movie-actors');
    const moviePoster = document.getElementById('movie-poster');
    movieTitle.textContent = `Title: ${movie.Title}`;
    movieRating.textContent = `Rating: ${movie.imdbRating}`;
    movieGenre.textContent = `Genre: ${movie.Genre}`;
    movieYear.textContent = `Year: ${movie.Year}`;
    movieRuntime.textContent = `Runtime: ${movie.Runtime}`;
    movieLanguage.textContent = `Language: ${movie.Language}`;
    moviePlot.textContent = `Plot: ${movie.Plot}`;
    movieDirector.textContent = `Director: ${movie.Director}`;
    movieActors.textContent = `Actors: ${movie.Actors}`;
    moviePoster.src = movie.Poster;
    modal.style.display = 'flex';
    disableScroll();
  }
export function hideModal() {
    const modal = document.getElementById('movie-detail-modal');
    modal.style.display = 'none';
    enableScroll();
  }
  document.getElementById('close-modal').addEventListener('click', hideModal);
  document.addEventListener('keydown', (event) => event.key === 'Escape' && hideModal());