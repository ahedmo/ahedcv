// Function to add 'fadeIn' class when element is in view
const fadeInElements = document.querySelectorAll('.fade-in');

function checkScroll() {
  fadeInElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.add('visible');
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', checkScroll);

// Initial check in case the page is already scrolled
checkScroll();

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    const targetId = link.getAttribute('href').slice(1);  // Get the target section id
    const targetSection = document.getElementById(targetId);
    
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
