import { showLoadingScreen, hideLoadingScreen } from './loading-screen.js';
import { displayData } from './display-data.js';

export let searchTitle = 'Coco';
export let type = 'Movie';
export let currentPage = 1;

window.searchTitle = searchTitle;
window.type = type;

const apiKey = '884d604e';
const apiVersion = '1';
const responseFormat = 'json';

export async function fetchData(page = currentPage) {
  showLoadingScreen(); // Show spinner while fetching data
  const url = new URL('https://www.omdbapi.com/');
  const params = {
    s: window.searchTitle,
    type: window.type,
    r: responseFormat,
    page: page,
    v: apiVersion,
    apikey: apiKey,
  };
  Object.keys(params).forEach(key => params[key] && url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'False') {
      alert(data.Error || 'No results found. Please try again.');
      hideLoadingScreen(); // Hide spinner if no results
    } else {
      // Pass data to displayData and wait for images to load
      await displayData(data.Search || []);
      hideLoadingScreen(); // Hide spinner after cards are fully ready
    }
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    hideLoadingScreen(); // Hide spinner in case of an error
  }
}


export function setCurrentPage(page) {
  currentPage = page;
}