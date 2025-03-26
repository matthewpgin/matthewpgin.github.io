/**
 * optimized-smooth-scroll.js
 * 
 * A lightweight, performance-focused smooth scrolling script
 * with minimal animation calculations.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor links that point to a section ID
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each anchor link
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        // Prevent default anchor behavior
        e.preventDefault();
        
        // Get the target element's ID from the href attribute
        const targetId = this.getAttribute('href');
        
        // Skip if the href is just "#"
        if (targetId === '#') return;
        
        // Get the target element
        const targetElement = document.querySelector(targetId);
        
        // If target element exists, scroll to it
        if (targetElement) {
          // Use the native scrollIntoView with smooth behavior
          // This uses the browser's optimized implementation
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });