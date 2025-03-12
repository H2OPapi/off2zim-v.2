// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-container');
  const navLinks = document.querySelector('.menu-dropdown');

  menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    menuDropdown.classList.toggle('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
      navLinks.classList.remove('show');
    }
  });
});

  // Search Tabs Functionality
  const tabs = document.querySelectorAll('.search-tabs .tab');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to selected tab and content
      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  

  // Slideshow Functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicators span');
  const totalSlides = slides.length;

  function showSlide(n) {
    // Reset all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Update current slide index
    currentSlide = (n + totalSlides) % totalSlides;
    
    // Activate current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  // Navigation buttons
  document.querySelector('.prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
  document.querySelector('.next')?.addEventListener('click', () => showSlide(currentSlide + 1));

  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
  });

  // Auto-advance slides every 5 seconds
  setInterval(() => showSlide(currentSlide + 1), 5000);

  // Initialize first slide
  showSlide(0);

  // Testimonial Carousel
  const testimonials = document.querySelectorAll('.testimonial-content');
  let testimonialIndex = 0;

  function showTestimonial(n) {
    testimonials.forEach(t => t.style.display = 'none');
    testimonialIndex = (n + testimonials.length) % testimonials.length;
    testimonials[testimonialIndex].style.display = 'block';
  }

  // Auto-rotate testimonials every 7 seconds
  setInterval(() => showTestimonial(testimonialIndex + 1), 7000);
  showTestimonial(0);
});

// Newsletter Form Submission with Validation
document.querySelector('.newsletter-section form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value;
  
  // Simple email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Add your newsletter submission logic here
  alert('Thanks for subscribing!');
  this.reset();
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dropdown Menu Interactions
document.querySelectorAll('.menu-trigger').forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    this.closest('.menu-container').classList.toggle('active');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.menu-container')) {
    document.querySelectorAll('.menu-container').forEach(menu => {
      menu.classList.remove('active');
    });
  }
});
