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
const plotType = 'short';

export async function fetchData(page = currentPage) {
  showLoadingScreen();
  
  const baseUrl = 'https://www.omdbapi.com/';
  
  // Step 1: Fetch a list of movies
  const searchUrl = new URL(baseUrl);
  const searchParams = {
    s: window.searchTitle,
    type: window.type,
    r: responseFormat,
    page: page,
    v: apiVersion,
    apikey: apiKey,
  };
  Object.keys(searchParams).forEach((key) =>
    searchParams[key] && searchUrl.searchParams.append(key, searchParams[key])
  );

  try {
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();

    if (searchData.Response === 'False') {
      alert(searchData.Error || 'No results found. Please try again.');
      hideLoadingScreen();
      return;
    }

    // Step 2: Fetch detailed info for each movie
    const detailedMovies = await Promise.all(
      searchData.Search.map(async (movie) => {
        const detailUrl = new URL(baseUrl);
        const detailParams = {
          i: movie.imdbID, // Fetch details by IMDb ID
          plot: plotType,
          apikey: apiKey,
        };
        Object.keys(detailParams).forEach((key) =>
          detailParams[key] && detailUrl.searchParams.append(key, detailParams[key])
        );

        const detailResponse = await fetch(detailUrl);
        const detailData = await detailResponse.json();
        return detailData.Response === 'True' ? detailData : null;
      })
    );

    // Step 3: Filter out any null responses and display results
    const validMovies = detailedMovies.filter((movie) => movie !== null);
    displayData(validMovies);
  } catch (error) {
    console.error('Error fetching data from the API:', error);
  } finally {
    hideLoadingScreen();
  }
}

export function setCurrentPage(page) {
  currentPage = page;
}
