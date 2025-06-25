// Parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.bg-layer').forEach(layer => {
    layer.style.transform = `translateY(${scrollY * 0.2}px)`;
  });

  document.querySelectorAll('.mid-layer').forEach(layer => {
    layer.style.transform = `translateY(${scrollY * 0.4}px)`;
  });
});

// Animate elements on scroll
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));

// Optional: Smooth scroll for anchor links (if using them in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
