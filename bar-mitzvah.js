        // Initialize Slider

        let activeSlide, nextSlide;

        const slider = document.getElementById("slider-container"),
            sliderItems = slider.querySelectorAll(".slider-item");

        activeSlide = 0;
        sliderItems[activeSlide].classList.toggle('active');
        sliderItems[activeSlide].style.opacity = '100';

        const prevButton = document.getElementById("sliderButtonPrev"),
            nextButton = document.getElementById("sliderButtonNext");

        function changeSlide(dir) {
            if (dir === 'prev') {
                if (activeSlide === 0) {
                    nextSlide = sliderItems.length - 1;
                } else {
                    nextSlide = activeSlide - 1;
                }
            } else if (activeSlide === sliderItems.length - 1 && dir === "next") {
                nextSlide = 0;
            } else {
                nextSlide = activeSlide + 1;
            }
            sliderItems[activeSlide].classList.toggle('active');
            fadeIn(sliderItems[nextSlide]);
            activeSlide = nextSlide;
        }

        prevButton.addEventListener("click", function() {
            changeSlide("prev");
        });
        nextButton.addEventListener("click", function() {
            changeSlide("next");
        });

        function fadeIn(element) {
            element.classList.toggle("active");

            let angle, speed;
            speed = 0.025;
            angle = 0;

            render();

            function render() {
                let alpha;
                alpha = Math.sin(angle);
                element.style.opacity = alpha;
                angle += speed;

                if (!closeEnough(alpha, 1.0)) {
                    requestAnimationFrame(render);
                }
            }
        }

        function closeEnough(a, b) {
            return abs(a - b) < 0.0001;
        }

        function abs(x) {
            if (x > 0) return x;
            return x * -1;
        }


        // Initialize 'Slanted Line' Functionality 

        const celebrationsMatter = document.getElementById('celebrations-matter'),
            slantedUnderline = document.getElementById('slantedUnderline');

        function adjustSlantedLine() {
            slantedUnderline.style.width = celebrationsMatter.offsetWidth + 'px';
        };

        adjustSlantedLine();
        window.addEventListener('resize', adjustSlantedLine);


        // Initialize 'Read More' Button Functionality

        const BREAKPOINT = 767.98;
        const readMoreButton = document.getElementById('readMore'),
            prepSchoolList = document.getElementById('prepSchoolList'),
            readMoreCardDesktop = document.getElementById('readMoreCardDesktop'),
            closeReadMoreCardDesktop = document.getElementById('closeReadMoreCardDesktop');
        readMoreCardMobile = document.getElementById('readMoreCardMobile'),
            closeReadMoreCardMobile = document.getElementById('closeReadMoreCardMobile');

        let width;

        readMoreButton.addEventListener('click', () => {
            width = window.innerWidth;

            if (width > BREAKPOINT) {
                prepSchoolList.classList.toggle('d-none');
                readMoreCardDesktop.classList.toggle('d-none');
                fadeIn(readMoreCardDesktop);
            } else {
                readMoreCardMobile.classList.toggle('d-none');
                fadeIn(readMoreCardMobile);
            }
        });

        closeReadMoreCardDesktop.addEventListener('click', () => {
            readMoreCardDesktop.classList.toggle('d-none');
            if (!prepSchoolList.classList.contains('fade')) {
                prepSchoolList.classList.add('fade');
            }
            prepSchoolList.classList.toggle('d-none');
            fadeIn(prepSchoolList);
        });

        closeReadMoreCardMobile.addEventListener('click', () => {
            readMoreCardMobile.classList.toggle('d-none');
        });
