// Select elements
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to update the active slide and indicator
function updateActiveSlide(index) {
  // Remove active class from all slides and indicators
  slideItems.forEach((slide) => slide.classList.remove('active'));
  indicators.forEach((indicator) => indicator.classList.remove('active'));

  // Set the active class for the current slide and indicator
  slideItems[index].classList.add('active');
  indicators[index].classList.add('active');

  // Update the slide position
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Next button click event
nextBtn.addEventListener('click', () => {
  if (currentIndex < slideItems.length - 1) {
    currentIndex++;
    updateActiveSlide(currentIndex);
  }
});

// Previous button click event
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateActiveSlide(currentIndex);
  }
});

// Indicator click event
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateActiveSlide(currentIndex);
  });
});
