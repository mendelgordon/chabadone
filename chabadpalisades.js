const pageURL = window.location.pathname;

if (pageURL.includes(4970020) && pageURL.includes('highholidays')) {
	const newStyles = `
<style>
@import url('https://assets.webmk.co/holidays/hh/style.css');
html:has(a[href="/tools/login/default.asp?aid=4970020&jewish=Donate.htm&highholidays=true&page=/templates/donate.asp"]) {
	display: unset !important;
}
#donate-wrapper #donate {
    background: #e9e6df;
    background: url(https://assets.webmk.co/holidays/hh/img/mesh-bg.jpg) no-repeat
    center;
    background-size: contain;
    background-color: #e9e6df;
	margin-top: 0;
}
#donate-wrapper h1,
#donate-wrapper h2 {
  color: #9c1c33;
  font-weight: 800 !important;
}
#donate-wrapper .button,
#donate-wrapper .next-button,
#donate-wrapper .donate-button {
  background-color: #9c1c33;
  color: white;
}
#donate-wrapper .button:hover,
#donate-wrapper .next-button:hover,
#donate-wrapper .donate-button:hover {
  background-color: #f26242;
}
#donate-wrapper main .amounts button {
  background-color: #9c1c33;
  color: white;
}
#donate-wrapper main .amounts button:hover {
  box-shadow: 0 0 40px 40px #f26242 inset;
  color: black;
}
#donate-wrapper .button:hover,
#donate-wrapper .next-button:hover,
#donate-wrapper .donate-button:hover {
  color: black !important;
  border-color: black !important;
}
#donate-wrapper .footnotes .note,
#donate-wrapper .footnotes .disclaimer,
div#confirm-wrapper::after,
div#donate-wrapper::after {
  display: none;
}
#donate-wrapper .footnotes {
  padding-bottom: 30px;
}
#donate-wrapper .intro-wrapper {
  max-width: min(800px, 100%);
  margin: auto;
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
}
#donate-wrapper #donate .intro-wrapper p.description {
  display: block;
}
@media screen and (min-width: 1001px) {
  #donate-wrapper .mobile-only {
    display: none !important;
  }
}
#donate-wrapper .image-bg {
  background-color: unset;
  background-image: url(https://www.chabadpalisades.com/media/images/1292/Yfqi12922005.jpeg), url(https://www.chabadpalisades.com/media/images/1292/LVDA12922056.jpeg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top, bottom;
}
section#donate.screen-2 h1 ~ * {
  display: none !important;
}
#donate-wrapper main .amounts {
  justify-content: space-around;
}

	@media (max-width: 1000px) {
    #donate-wrapper #donate aside {
	  display: none;
	}
  }
</style>
        `;

	document.head.insertAdjacentHTML('beforeend', newStyles);

	const contentWrapper = document.querySelector('.co_content_container');

	const newHero = `
	<div class="master-content-wrapper ">
					

<header class="article-header cf "><div class="shofar-header">
      <img src="https://assets.webmk.co/holidays/hh/img/shofar-icon.png" width="414" height="360" alt="Shofar">
  </div>
	
	
			<h1 class="article-header__title js-article-title js-page-title"><div class="hh-home-link">
      <a href="https://www.chabadpalisades.com/article.asp?aid=6560921" class="shofar-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3322 7.89395L15.7218 3.25515C13.8319 1.69262 11.1679 1.69262 9.27808 3.25515L3.6676 7.89395C2.65678 8.7297 2.08325 9.99685 2.08325 11.319V18.5529C2.08325 20.902 3.88966 22.9166 6.24992 22.9166H8.33325C9.48385 22.9166 10.4166 21.9839 10.4166 20.8333V17.4455C10.4166 16.1252 11.4084 15.1652 12.4999 15.1652C13.5915 15.1652 14.5833 16.1252 14.5833 17.4455V20.8333C14.5833 21.9839 15.516 22.9166 16.6666 22.9166H18.7499C21.1102 22.9166 22.9166 20.902 22.9166 18.5529V11.319C22.9166 9.99686 22.343 8.7297 21.3322 7.89395Z" fill="#F26242"></path>
        </svg>
        <div>High Holidays</div>
      </a>
    </div>High Holidays at Chabad of Pacific Palisades</h1>
		
			<div>
				
			</div>
		
</header>
				</div>
	`;

	contentWrapper.insertAdjacentHTML('afterbegin', newHero);

	const introWrapper = document.querySelector('.intro-wrapper .col');

	if (introWrapper) {
		introWrapper.innerHTML = `
            <img src="/media/images/1292/Yfqi12922005.jpeg" style="max-width: min(500px, 100%); margin: auto; display: block;" class="mobile-only" alt="" />

<h1 style="font-weight: bold;">Support Our Jewish Community during the High Holidays!</h1>

<p class="description">It’s been a difficult year for Jewish communities all over the world. People in our own community face challenges. Many feel isolated and misunderstood by their friends, neighbors, and peers. Some in our community feel attacked and helpless as the antisemitism has spiked around the globe. Since Oct 7, many people are looking for a welcoming place to engage, connect, and rediscover their roots.</p>

<p class="description">You can help! You can give them that space. You can provide a sanctuary of comfort, connection, and Jewish pride during the High Holidays and all year long!</p>

<p class="description">Every gift counts. Your support will have a direct and lasting impact on the people in our community.</p>

<p class="description"><b>Together, we can make this year’s High Holidays a time of joy, unity, and spiritual renewal for our community.
</b></p>

<p class="description">Thank you for standing with us and helping to keep Jewish traditions alive and vibrant!</p>
          `;
	}

	const purposeSelection = document.querySelector('select[name="donation_subtype"]');
	if (purposeSelection) {
		const hh = purposeSelection.querySelector('option[value="High Holidays"]');

		if (hh) {
			hh.selected = true;
		}

		const wrapper = purposeSelection.closest('.field-wrapper');

		if (wrapper) {
			wrapper.classList = "js-field-wrapper field-wrapper has-value";
		}
	}

	const amountsBox = document.querySelector('.amounts');
	if (amountsBox) {
		amountsBox.innerHTML = `
            <button class="js-amounts-button" type="button" data-amount="180">$180</button>
            <button class="js-amounts-button" type="button" data-amount="360">$360</button>
            <button class="js-amounts-button" type="button" data-amount="540">$540</button>
            <button class="js-amounts-button" type="button" data-amount="1000">$1,000</button>
            <button class="js-amounts-button" type="button" data-amount="1800">$1,800</button>
            <button class="js-amounts-button" type="button" data-amount="3600">$3,600</button>
            <button class="js-amounts-button" type="button" data-amount="5400">$5,400</button>
            <button class="js-amounts-button" type="button" data-amount="10000">$10,000</button>
          `;
	}

	const submitButton = document.querySelector('.js-donate-button');

	if (submitButton) {
		const newText = document.createElement('p');
		newText.className = 'submission-additional-text';
		newText.innerHTML = `
        Your donation to our High Holidays Campaign will ensure:<br>
A welcoming place to celebrate.<br>
A supportive community to be part of and to lean on.<br>
An opportunity to grow their Jewish pride in the face of uncertainty.<br>
Your generosity will help create a warm and welcoming environment for our community!
      `;

		submitButton.parentElement.appendChild(newText);
	}

	const container = document.querySelector('.screen-1');
	const imageBg = container.querySelector('aside.image-bg');

	if (imageBg) {
		imageBg.outerHTML = `<aside class="image-bg"></aside>`;
	} else {
		container.insertAdjacentHTML('afterbegin', `<aside class="image-bg"></aside>`);
	}

	const amountsButtons = document.querySelectorAll(".js-amounts-button");
	const nextButton = document.querySelector("button.next-button");
	const pageTwo = document.querySelector("h1");

	function scrollToPageTwo() {
		pageTwo.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	nextButton.addEventListener('click', function () {
		setTimeout(scrollToPageTwo, 800);
	});

	amountsButtons.forEach(function (amountsButton) {
		amountsButton.addEventListener('click', function () {
			setTimeout(scrollToPageTwo, 400);
		});
	});
};
