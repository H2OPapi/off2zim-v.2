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

  // Responsive Menu Toggle for Mobile Navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
});

// Email Validation Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Sticky Header on Scroll
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

// Close Responsive Menu When Clicking Outside
window.addEventListener('click', function (e) {
  if (!e.target.matches('.menu-toggle') && !e.target.closest('.nav-links')) {
    navLinks.classList.remove('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tempElements = document.querySelectorAll(".destination-temp");

  tempElements.forEach((element) => {
    const tempText = element.textContent.match(/\d+/g); // Extract numbers
    if (tempText && tempText.length === 2) {
      const highTemp = parseInt(tempText[0]); // High temperature
      const lowTemp = parseInt(tempText[1]);  // Low temperature

      const highSpan = document.createElement("span");
      highSpan.textContent = `H: ${highTemp}° `;
      if (highTemp >= 30) {
        highSpan.classList.add("temp-high-hot"); // Red for 30°C+
      } else if (highTemp >= 20) {
        highSpan.classList.add("temp-high-warm"); // Orange for 20-29°C
      } else {
        highSpan.classList.add("temp-high-cold"); // Blue for 19°C and below
      }

      const lowSpan = document.createElement("span");
      lowSpan.textContent = `L: ${lowTemp}°`;
      if (lowTemp >= 30) {
        lowSpan.classList.add("temp-low-hot"); // Red for 30°C+
      } else if (lowTemp >= 20) {
        lowSpan.classList.add("temp-low-warm"); // Orange for 20-29°C
      } else {
        lowSpan.classList.add("temp-low-cold"); // Blue for 19°C and below
      }

      // Clear existing text and append the new elements
      element.textContent = "";
      element.appendChild(highSpan);
      element.appendChild(lowSpan);
    }
  });
});
