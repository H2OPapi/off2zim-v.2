// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Search Tabs Functionality with Active Indicator
  const tabs = document.querySelectorAll('.search-tabs .tab');
  const tabContents = document.querySelectorAll('[data-tab-content]');
  const activeIndicator = document.querySelector('.active-indicator');

  function updateIndicator(targetTab) {
    if (!targetTab || !activeIndicator) return;
    
    const tabRect = targetTab.getBoundingClientRect();
    const containerRect = targetTab.parentElement.getBoundingClientRect();
    
    activeIndicator.style.width = `${tabRect.width - 20}px`;
    activeIndicator.style.transform = `translateX(${tabRect.left - containerRect.left + 10}px)`;
    activeIndicator.style.borderRadius = '5px';
  }

  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = tab.dataset.tab;
        
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to selected tab and content
        tab.classList.add('active');
        document.getElementById(target)?.classList.add('active');
        
        // Update active indicator
        updateIndicator(tab);
      });
    });

    // Initialize first tab
    const initialTab = document.querySelector('.tab.active');
    if (initialTab) {
      updateIndicator(initialTab);
      document.getElementById(initialTab.dataset.tab)?.classList.add('active');
    }
  }

  // Handle window resize for search tabs
  window.addEventListener('resize', () => {
    updateIndicator(document.querySelector('.tab.active'));
  });

  // Destination Dropdown Functionality
  const destinationInput = document.getElementById('destination');
  const destinationsDropdown = document.querySelector('.destinations-dropdown');
  const destinationItems = document.querySelectorAll('.destination-item');
  const inputIcon = document.querySelector('.input-icon');
  let selectedDisplay = document.querySelector('.selected-location');

  if (destinationInput && destinationsDropdown) {
    // Create selected display element
    if (!selectedDisplay) {
      selectedDisplay = document.createElement('div');
      selectedDisplay.className = 'selected-location';
      destinationInput.parentNode.insertBefore(selectedDisplay, destinationInput);
    }

    // Show dropdown on input focus
    destinationInput.addEventListener('focus', () => {
      destinationsDropdown.style.display = 'block';
      destinationsDropdown.scrollTop = 0;
      selectedDisplay.style.display = 'none';
      destinationInput.style.display = 'block';
      destinationInput.focus();
    });

    // Hide dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-field')) {
        destinationsDropdown.style.display = 'none';
      }
    });

    // Handle item selection
    destinationItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const icon = item.querySelector('i').cloneNode(true);
        const text = item.querySelector('span').textContent;
        
        // Update display
        selectedDisplay.innerHTML = '';
        selectedDisplay.appendChild(icon);
        selectedDisplay.appendChild(document.createTextNode(text));
        
        // Update actual input value
        destinationInput.value = text;
        
        // Switch visibility
        selectedDisplay.style.display = 'flex';
        destinationInput.style.display = 'none';
        destinationsDropdown.style.display = 'none';
      });
    });

    // Filter functionality with 7 item limit
    destinationInput.addEventListener('input', function() {
      const filter = this.value.toLowerCase();
      let visibleCount = 0;
      
      destinationItems.forEach(item => {
        const text = item.querySelector('span').textContent.toLowerCase();
        if (text.includes(filter)) {
          item.style.display = visibleCount < 7 ? 'flex' : 'none';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });
    });

    // Allow reopening dropdown when clicking selected display
    selectedDisplay.addEventListener('click', () => {
      destinationInput.style.display = 'block';
      selectedDisplay.style.display = 'none';
      destinationInput.focus();
    });
  }

  // Slideshow Functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicators span');
  const totalSlides = slides.length;

  function showSlide(n) {
    if (slides.length === 0) return;
    
    currentSlide = (n + totalSlides) % totalSlides;
    
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[currentSlide]?.classList.add('active');
    indicators[currentSlide]?.classList.add('active');
  }

  if (slides.length > 0) {
    document.querySelector('.prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
    document.querySelector('.next')?.addEventListener('click', () => showSlide(currentSlide + 1));

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => showSlide(currentSlide + 1), 5000);
    showSlide(0);
  }

  // Testimonial Carousel
  const testimonials = document.querySelectorAll('.testimonial-content');
  let testimonialIndex = 0;

  function showTestimonial(n) {
    if (testimonials.length === 0) return;
    
    testimonialIndex = (n + testimonials.length) % testimonials.length;
    testimonials.forEach(t => t.style.display = 'none');
    testimonials[testimonialIndex].style.display = 'block';
  }

  if (testimonials.length > 0) {
    setInterval(() => showTestimonial(testimonialIndex + 1), 7000);
    showTestimonial(0);
  }

  // Newsletter Form Submission
  document.querySelector('.newsletter-section form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thanks for subscribing!');
    this.reset();
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
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

  // Mobile Menu Close on Click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });
});

// Additional Helper Functions
function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}