window.addEventListener('scroll', function() {
    var collectionContainer = document.querySelector('.collection-container');
    var collectionList = document.querySelector('.collection-list.grid');
    var collectionData = document.querySelector('.collection-data');
    var bounding = collectionContainer.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the entire container is out of view
    if (bounding.top >= windowHeight || bounding.bottom <= 0) {
        // If the container is out of view, remove the 'active' class from the collection list
        collectionList.classList.remove('active');
        collectionData.classList.remove('show');
    } else {
        // If the container is in view, add the 'active' class to the collection list
        collectionList.classList.add('active');
        collectionData.classList.add('show');
    }
});













var nextButton = document.getElementById('nextbut');

// Function to simulate a click event on the next button
function clickNextButton() {
    nextButton.click();
}

// Automatically trigger the click event every 2 seconds
setInterval(clickNextButton, 5000);

// Select all swiper slides with the class "fade-in-on-scroll"
const swiperSlides = document.querySelectorAll('.fade-in-on-scroll');

// Intersection Observer callback function
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the "show" class when the swiper slide comes into view
            entry.target.classList.add('show');
            // Stop observing the swiper slide to prevent multiple fade-in effects
            observer.unobserve(entry.target);
        }
    });
};

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0.5 // Adjust the threshold as needed
});

// Observe each swiper slide
swiperSlides.forEach(slide => {
    observer.observe(slide);
});





document.addEventListener("DOMContentLoaded", function() {
    var hallmarkElements = document.querySelectorAll(".hallmark-title");
  
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function addAnimation() {
      hallmarkElements.forEach(function(element) {
        if (isInViewport(element)) {
          element.classList.add("fadeInUp");
        }
      });
    }
  
    // Initial check
    addAnimation();
  
    // Check on scroll
    window.addEventListener("scroll", addAnimation);
  });
  

  // Get a reference to the ul element











  