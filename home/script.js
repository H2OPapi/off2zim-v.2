// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Dropdown Menu Toggle
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
      e.preventDefault();
      this.querySelector('.dropdown-content').classList.toggle('show');
    });
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropbtn')) {
      const dropdownContents = document.querySelectorAll('.dropdown-content');
      dropdownContents.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      });
    }
  });

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Form Validation for Newsletter Subscription
  const newsletterForm = document.querySelector('.newsletter-section form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        this.reset();
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
});

// Email Validation Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Sticky Navigation: Toggle 'sticky' class based on scroll position
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Dynamic Year Update in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Responsive Menu Toggle for Mobile Navigation
const menuToggle = document.querySelector('.menu-book .btn-outline');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.classList.toggle('active');
  });
}

// Close Responsive Menu When Clicking Outside
window.addEventListener('click', function (e) {
  if (!e.target.matches('.menu-book .btn-outline') && !e.target.closest('.nav-links')) {
    navLinks.classList.remove('active');
  }
});
