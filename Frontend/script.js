
// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
    const discountSection = document.querySelector("#discount");
  
    // Create an Intersection Observer to watch when the section enters the viewport
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the "visible" class to start the animation
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );
  
    // Start observing the discount section
    observer.observe(discountSection);
  });

  // Add the scroll animation
document.addEventListener("scroll", function () {
    const section = document.querySelector("#new");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add("show");
    } else {
        section.classList.remove("show");
    }
});

  