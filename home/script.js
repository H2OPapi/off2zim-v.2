document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".indicators span");
  let autoSlideInterval;

  // Initialize slideshow
  function initializeSlideshow() {
    // Remove any existing active classes
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    // Activate first slide and dot
    slides[0].classList.add("active");
    dots[0].classList.add("active");
    
    // Start auto-slide
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function nextSlide() {
    // Clear existing interval
    clearInterval(autoSlideInterval);
    
    // Remove active classes
    slides[slideIndex].classList.remove("active");
    dots[slideIndex].classList.remove("active");
    
    // Update index
    slideIndex = (slideIndex + 1) % slides.length;
    
    // Add active classes
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
    
    // Restart interval
    autoSlideInterval = setInterval(nextSlide, 7000);
  }

  function setSlide(n) {
    // Clear existing interval
    clearInterval(autoSlideInterval);
    
    // Remove active classes
    slides[slideIndex].classList.remove("active");
    dots[slideIndex].classList.remove("active");
    
    // Update index
    slideIndex = n;
    
    // Add active classes
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
    
    // Restart interval
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  // Add click handlers to indicators
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => setSlide(index));
  });

  // Initialize the slideshow
  initializeSlideshow();

  // Navigation Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });

  // Sticky Header on Scroll
  window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 50);
  });

  // Dynamic Year in Footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
              target.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});
