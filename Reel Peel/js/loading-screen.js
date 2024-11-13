// Select the loading screen element by its ID
const loadingScreen = document.getElementById('loadingScreen');

// Function to hide the loading screen
export function hideLoadingScreen() {
  loadingScreen.style.display = 'none';
}

// Function to show the loading screen
export function showLoadingScreen() {
  loadingScreen.style.display = 'flex';
}
