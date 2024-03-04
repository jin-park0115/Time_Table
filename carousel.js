const carousel = document.getElementById("carousel");
const images = carousel.getElementsByTagName("img");
const interval = 2000;
let currentIndex = 0;
let timer;

const showImage = (index) => {
  for (let i = 0; i < images.length; i++) {
    if (i === index) {
      images[i].style.opacity = 1;
    } else {
      images[i].style.opacity = 0;
    }
  }
};

const nextImage = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

const startCarousel = () => {
  timer = setInterval(nextImage, interval);
};

const stopCarousel = () => {
  clearInterval(timer);
};

carousel.addEventListener("mouseenter", stopCarousel);
carousel.addEventListener("mouseleave", startCarousel);

showImage(currentIndex);

startCarousel();
