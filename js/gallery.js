let currentIndex = 0;

const track = document.getElementById("galleryTrack");
const slides = track.children;
const totalSlides = slides.length;

function updateGallery() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove("active");
  }

  slides[currentIndex].classList.add("active");

  const slideWidth = slides[0].offsetWidth + 40; 
  const centerOffset = (track.parentElement.offsetWidth / 2) - (slideWidth / 2);

  track.style.transform =
    `translateX(${centerOffset - (currentIndex * slideWidth)}px)`;
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = totalSlides - 1;
  if (currentIndex >= totalSlides) currentIndex = 0;

  updateGallery();
}

window.addEventListener("load", updateGallery);
