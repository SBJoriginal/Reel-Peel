import { fetchData, setCurrentPage, currentPage } from './data-fetching.js';
import { initializeSearch } from './search-handler.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchData(currentPage);
  document.getElementById('next-page-button').addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
    fetchData(currentPage);
  });
});

initializeSearch();
