function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const element = document.querySelector('.maze-solution');
  if (isElementInViewport(element)) {
    setTimeout(() => {
      element.classList.add('fade-in');
      window.removeEventListener('scroll', handleScroll);
    }, 1000); // Wait for 500 milliseconds (0.5 seconds) before triggering the animation
  }
}


window.addEventListener('scroll', handleScroll);