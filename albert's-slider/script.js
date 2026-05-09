const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

// Reverse the order of the left slide's children to match the right slide
const leftSlideChildren = Array.from(slideLeft.querySelectorAll("div"));
leftSlideChildren.reverse().forEach((child) => slideLeft.appendChild(child));

// Initialize the active slide index
let activeSlideIndex = 0;

// Position the left slide above the right slide
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add event listeners to the buttons
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// Function to change the slide based on the direction
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      slideRight.style.transition = "none";
      slideLeft.style.transition = "none";
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      slideRight.style.transition = "none";
      slideLeft.style.transition = "none";
      activeSlideIndex = slidesLength - 1;
    }
  }

  // Add a small delay to allow the transition to reset before applying the new transform
  slideRight.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * 100}vh)`;

  // Reset the transition after applying the transform
  setTimeout(() => {
    slideRight.style.transition = "";
    slideLeft.style.transition = "";
  }, 100);
};
