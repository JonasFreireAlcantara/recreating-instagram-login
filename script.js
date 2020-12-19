const timeout =5000;
const images = document.querySelectorAll(".instagram-phone-screen");
let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].classList.remove("show");
  currentImageIndex = (currentImageIndex + 1) % 4;
  images[currentImageIndex].classList.add("show");
}

window.addEventListener("load", () => {
  setInterval(() => {
    changeImage();
  }, timeout);
});