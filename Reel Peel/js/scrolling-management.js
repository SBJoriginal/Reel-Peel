export function preventDefault(e) {
    e.preventDefault();
  }
export function disableScroll() {
    document.addEventListener('wheel', preventDefault, { passive: false });
  }
export function enableScroll() {
    document.removeEventListener('wheel', preventDefault, { passive: false });
  }