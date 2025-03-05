// Dropdown Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
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
      const dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      });
    }
  });
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

// Sticky Navigation
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Form Validation
const newsletterForm = document.querySelector('.newsletter-section form');
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

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Dynamic Year Update
document.getElementById('year').textContent = new Date().getFullYear();

// Responsive Menu Toggle
const menuToggle = document.querySelector('.menu-book .btn-outline');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function (e) {
  e.preventDefault();
  navLinks.classList.toggle('active');
});

// Close Menu When Clicking Outside
window.addEventListener('click', function (e) {
  if (!e.target.matches('.menu-book .btn-outline') && !e.target.closest('.nav-links')) {
    navLinks.classList.remove('active');
  }
});