// carousel
document.addEventListener('DOMContentLoaded', function () {

  const myCarouselElement = document.querySelector('#myCarousel');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  });
});

// console.log
console.log(getComputedStyle(document.querySelector(".navbar")).height);
console.log(getComputedStyle(document.querySelector(".nav")));

