import { fetchData } from './data-fetching.js';
import { clearDataContainer } from './display-data.js';

function handleSearch() {
  const searchTitleInput = document.getElementById('search-input').value.trim();
  const typeSelect = document.getElementById('type-select').value;

  if (!searchTitleInput) {
    alert('Please enter a search title.');
    return;
  }

  window.searchTitle = searchTitleInput;
  window.type = typeSelect;

  fetchData(1);
}

export function initializeSearch() {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input')
  

  if (searchButton) {
    searchButton.addEventListener('click', function() {
      clearDataContainer(); 
      handleSearch();     
    });
  }
  

  if (searchInput) {
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        clearDataContainer();
        handleSearch();
      }
    });
  }
}