// Scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
  // Configuration options for the animations
  const animationConfig = {
    threshold: 0.12, // Slightly reduced threshold to trigger animations earlier
    rootMargin: '0px 0px -80px 0px' // Adjusted to trigger animations a bit sooner
  };

  // Define animation classes to be applied
  const animationClasses = [
    'fade-in',        // Simple fade in
    'slide-up',       // Slide up and fade in
    'slide-left',     // Slide in from left
    'slide-right',    // Slide in from right
    'zoom-in',        // Zoom in effect
    'flip',           // Flip effect
    'bounce'          // Bounce in effect
  ];

  // Elements to animate with more specific selectors for better control
  const sectionsToAnimate = [
    { selector: '.hero-section', animation: 'fade-in', delay: 0 },
    { selector: '.services', animation: 'fade-in', delay: 0 },
    { selector: '.section-header', animation: 'slide-up', delay: 0 },
    { selector: '.services-grid .service-card', animation: 'slide-up', stagger: true, baseDelay: 0.1 },
    { selector: '.services-cta', animation: 'zoom-in', delay: 0 },
    { selector: '.consulting-section', animation: 'fade-in', delay: 0 },
    { selector: '.consulting-image', animation: 'slide-left', delay: 0.2 },
    { selector: '.main-title', animation: 'slide-right', delay: 0.3 },
    { selector: '.consulting-content .feature-item', animation: 'slide-right', stagger: true, baseDelay: 0.15 },
    { selector: '.testimonials', animation: 'fade-in', delay: 0 },
    { selector: '.testimonial-card', animation: 'fade-in', stagger: true, baseDelay: 0.2 }
  ];

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When element enters viewport
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('visible');
        
        // Don't observe anymore after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, animationConfig);

  // Initialize animations by adding appropriate classes and observers
  function initializeAnimations() {
    // Process each item in our configuration
    sectionsToAnimate.forEach(section => {
      // Get all elements matching this selector
      const elements = document.querySelectorAll(section.selector);
      
      elements.forEach((element, index) => {
        // Add the base animation class
        element.classList.add('scroll-reveal', section.animation);
        
        // Apply delay - either fixed or staggered
        if (section.stagger) {
          element.style.transitionDelay = `${section.baseDelay * index}s`;
        } else if (section.delay) {
          element.style.transitionDelay = `${section.delay}s`;
        }
        
        // Start observing the element
        observer.observe(element);
      });
    });
  }

  // Handle animations for items that should appear sequentially
  function initializeSequentialAnimations() {
    const featureItems = document.querySelectorAll('.consulting-content .feature-item');
    
    featureItems.forEach((item, index) => {
      // Reset any existing animation to work with our scroll system
      item.style.animation = 'none';
      item.style.opacity = '0';
      item.style.transform = 'translateX(20px)';
      
      // Add our animation classes
      item.classList.add('scroll-reveal', 'slide-right');
      
      // Add staggered delay with slightly longer timing for more natural flow
      item.style.transitionDelay = `${0.15 * index}s`;
      
      // Observe the element
      observer.observe(item);
    });
  }

  // Add smooth scrolling to anchor links
  function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Smooth scroll to the target
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without page jump
          history.pushState(null, null, targetId);
        }
      });
    });
  }

  // Optional: Add a subtle parallax effect to certain elements
  function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-image, .gradient-overlay');
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      parallaxElements.forEach(element => {
        // Apply a subtle movement based on scroll position
        const speed = element.classList.contains('gradient-overlay') ? 0.15 : 0.05;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    }, { passive: true });
  }

  // Initialize all animations and effects
  initializeAnimations();
  initializeSequentialAnimations();
  initializeSmoothScrolling();
  initializeParallaxEffects();
  
  // Ensure animations work on page refresh by triggering visible class for elements already in viewport
  setTimeout(() => {
    const scrollPosition = window.scrollY + window.innerHeight;
    
    document.querySelectorAll('.scroll-reveal').forEach(element => {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      if (elementPosition < scrollPosition) {
        element.classList.add('visible');
      }
    });
  }, 200);
});
