window.addEventListener("DOMContentLoaded", () => {
  const slideshow = `<div class="slider"><div class="slide active"><img src="https://chabad.netlify.app/chabadfire/%20(1).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(2).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(3).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(4).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(5).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(6).jpeg" alt=""></div><div class="navigation"><i class="fas fa-chevron-left prev-btn"></i><i class="fas fa-chevron-right next-btn"></i></div><div class="navigation-visibility"><div class="slide-icon active"></div><div class="slide-icon"></div><div class="slide-icon"></div><div class="slide-icon"></div><div class="slide-icon"></div><div class="slide-icon"></div></div></div>`;
  const pageHeader = document.querySelector(".page-header");
  pageHeader.insertAdjacentHTML("afterend", slideshow);

  const slider = document.querySelector(".slider");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const slides = document.querySelectorAll(".slide");
  const slideIcons = document.querySelectorAll(".slide-icon");
  const numberOfSlides = slides.length;
  var slideNumber = 0;

  //image slider next button
  nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  });

  //image slider previous button
  prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  });

  //image slider autoplay
  var playSlider;

  var repeater = () => {
    playSlider = setInterval(function () {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber++;

      if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    }, 4000);
  };
  repeater();

  //stop the image slider autoplay on mouseover
  slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
  });

  //start the image slider autoplay again on mouseout
  slider.addEventListener("mouseout", () => {
    repeater();
  });
});
