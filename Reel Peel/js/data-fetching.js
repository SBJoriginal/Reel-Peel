import { showLoadingScreen, hideLoadingScreen } from './loading-screen.js';
import { displayData } from './display-data.js';

export let currentPage = 1;
let searchTitle = 'captain'; // Default search title
let type = 'series'; // Default type
let year = ''; // Default year
let r = 'json'; // Default response format
let callback = ''; // Default callback
let v = '1'; // Default API version
export async function fetchData(page = currentPage) {
  showLoadingScreen();
  // Construct the URL with all parameters
  const url = new URL('https://www.omdbapi.com/');
  const params = {
    s: searchTitle,
    type: type,
    y: year,
    r: r,
    page: page,
    callback: callback,
    v: v,
    apikey: '884d604e'
  };
  Object.keys(params).forEach(key => params[key] && url.searchParams.append(key, params[key]));
  const options = {
    method: 'GET'
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.Response === 'False') {
      console.error('API Error:', data.Error);
      alert('No results found or there is an issue with the search term. Please try again.');
    } else {
      displayData(data.Search || []);
    }
    hideLoadingScreen();
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    hideLoadingScreen();
  }
}
export function setCurrentPage(page) {
  currentPage = page;
}