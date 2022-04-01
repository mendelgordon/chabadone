window.onload = () => {
   if (Co.ArticleId === '5388152') {
      const slideshow = `<div id="slideshow-example" data-component="slideshow"><div role="list"><div class="slide"><img src="https://chabad.netlify.app/chabadfire/(1).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/(2).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/(3).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/(4).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/(5).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/(6).jpeg" alt=""></div></div></div><style>[data-component="slideshow"] .slide {display: none} [data-component="slideshow"] .slide.active {display: block}</style>`;
      const goalGraph = document.querySelector('.fs-goal');
      goalGraph.insertAdjacentHTML('beforebegin', slideshow);

      var slideshows = document.querySelectorAll('[data-component="slideshow"]');

      // Apply to all slideshows that you define with the markup wrote
      slideshows.forEach(initSlideShow);

      function initSlideShow(slideshow) {
         var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

         var index = 0,
            time = 5000;
         slides[index].classList.add('active');

         setInterval(() => {
            slides[index].classList.remove('active');

            //Go over each slide incrementing the index
            index++;

            // If you go over all slides, restart the index to show the first slide and start again
            if (index === slides.length) index = 0;

            slides[index].classList.add('active');
         }, time);
      }
   }
};
