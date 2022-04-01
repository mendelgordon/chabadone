window.onload = () => {
   if (Co.ArticleId === '5388152') {
      const slideshow = `<div id="slideshow-example" data-component="slideshow"><div role="list"><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(1).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(2).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(3).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(4).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(5).jpeg" alt=""></div><div class="slide"><img src="https://chabad.netlify.app/chabadfire/%20(6).jpeg" alt=""></div></div></div><style>[data-component="slideshow"] .slide {display: none;text-align:center} [data-component="slideshow"] .slide.active {display: block}.slide img {max-width:400px}</style>`;
      const pageHeader = document.querySelector('.page-header');
      pageHeader.insertAdjacentHTML('afterend', slideshow);

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
