import { fetchData, setCurrentPage, currentPage } from './data-fetching.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchData(currentPage);
  document.getElementById('next-page-button').addEventListener('click', () => {
    setCurrentPage(currentPage + 1); // Update the page number
    fetchData(currentPage);
  });
});
