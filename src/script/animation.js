// Scroll Reveal
// Animación a navbar
window.sr = ScrollReveal();
sr.reveal('.nav', {
  distance: '50px',
  duration: 1000,
  origin: 'top'
});

// Animación al texto central
sr.reveal('.txt', {
  distance: '200px',
  duration: 2000,
  origin: 'top',
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
