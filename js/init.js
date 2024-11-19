import { fetchData, setCurrentPage, currentPage } from './data-fetching.js';
import { initializeSearch } from './search-handler.js';
import { hideModal } from './modal-handling.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchData(currentPage);
  document.getElementById('next-page-button').addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
    fetchData(currentPage);
  });
});
hideModal();

initializeSearch();
