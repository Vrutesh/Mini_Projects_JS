let next_btn = document.querySelector(".next-button");
let previous_btn = document.querySelector(".back-button");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const next_Slide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = [currentSlide + 1] % slides.length;
  slides[currentSlide].classList.add("active");

  if (currentSlide === slides.length - 1) {
    clearInterval(intervalID);
    next_btn.style.opacity = "0.5";
    next_btn.style.cursor = "not-allowed";
    next_btn.removeEventListener("click", next);
  }
  if (currentSlide >= 0) {
    previous_btn.style.opacity = "1";
    previous_btn.style.cursor = "pointer";
    previous_btn.addEventListener("click", previous);
  }
};

const intervalID = setInterval(next_Slide, 2000);

const previous_Slide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = [currentSlide - 1 + slides.length] % slides.length;
  slides[currentSlide].classList.add("active");

  if (currentSlide === slides.length - 2) {
    next_btn.style.opacity = "1";
    next_btn.style.cursor = "pointer";
    next_btn.addEventListener("click", next);
  }

  if (currentSlide === 0) {
  previous_btn.style.opacity = "0.5";
  previous_btn.style.cursor = "not-allowed";
  previous_btn.removeEventListener("click", previous);
}
};

const next = () => {
  console.log("Next button Clicked");
  next_Slide();
};

const previous = () => {
  console.log("Previous button Clicked");
  previous_Slide();
};

next_btn.addEventListener("click", next);
previous_btn.addEventListener("click", previous);

if (currentSlide === 0) {
  previous_btn.style.opacity = "0.5";
  previous_btn.style.cursor = "not-allowed";
  previous_btn.removeEventListener("click", previous);
}
