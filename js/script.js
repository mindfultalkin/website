// Load header and footer dynamically
window.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header-container').innerHTML = data);

  fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-container').innerHTML = data);
});

// Testimonials Carousel Functionality
let currentSlide = 0;
let autoSlideInterval;
const slideDelay = 5000; // 5 seconds

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initializeCarousel();
});

function initializeCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');

  if (!track || !dotsContainer) return;

  const slides = track.children;
  const totalSlides = slides.length;

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  // Start auto-slide
  startAutoSlide();

  // Pause auto-slide on hover
  const carousel = document.querySelector('.testimonials-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  }
}

function updateCarousel() {
  const track = document.getElementById('carousel-track');
  const dots = document.querySelectorAll('.dot');

  if (!track || !dots.length) return;

  const slideWidth = 100;
  const offset = currentSlide * slideWidth;

  // Update track position
  track.style.transform = `translateX(-${offset}%)`;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const totalSlides = track.children.length;
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();

  // Reset auto-slide timer
  resetAutoSlide();
}

function prevSlide() {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const totalSlides = track.children.length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();

  // Reset auto-slide timer
  resetAutoSlide();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();

  // Reset auto-slide timer
  resetAutoSlide();
}

function startAutoSlide() {
  stopAutoSlide(); // Clear any existing interval
  autoSlideInterval = setInterval(nextSlide, slideDelay);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Touch/Swipe support for mobile
let startX = 0;
let endX = 0;

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;

  carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
  carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
});

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = startX - endX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide(); // Swipe left - next slide
    } else {
      prevSlide(); // Swipe right - previous slide
    }
  }
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;

  // Only handle keys if carousel is in viewport
  const rect = carousel.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  if (isVisible) {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
    }
  }
});
