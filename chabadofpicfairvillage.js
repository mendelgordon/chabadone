const pageURL = window.location.pathname;

if (pageURL.includes(4970020) && pageURL.includes('highholidays')) {
	const header = document.querySelector('#header');
	const footer = document.querySelector('#footer');

	if (header) {
		header.outerHTML = `
            <link rel="Stylesheet" href="/css/cco/minisites/themes/holiday/high-holiday-minisite.css?g=10&amp;v=8CE3D0E2" id="k23366" type="text/css">
<div width="100%" class="cco_templateless_template" style="z-index:100 !important;display:block !important;left:0px !important;top:0px !important;height:30px!important;width:100% !important;line-height:30px !important; position:relative !important; margin-bottom:0 !important; padding:0;text-indent: 25px;" align="Left"><a href="//www.chabadofpicfairvillage.com" style="display:block!important;font-size:14px !important;">« Back to&nbsp;Chabad of Picfair Village</a></div>
<style>
#donate-wrapper {
  background: #f6f6f2;
}
#donate-wrapper #donate {
  background-color: #fdfdfd;
}
#donate-wrapper h1,
#donate-wrapper h2 {
  color: #de2a43;
  font-weight: 800 !important;
}
#donate-wrapper .button,
#donate-wrapper .next-button,
#donate-wrapper .donate-button {
  background-color: #627b52;
  color: white;
}
#donate-wrapper .button:hover,
#donate-wrapper .next-button:hover,
#donate-wrapper .donate-button:hover {
  background-color: #2E7D32;
}
#donate-wrapper main .amounts button {
  background-color: #D32F2F;
  color: white;
}
#donate-wrapper main .amounts button:hover {
  box-shadow: 0 0 40px 40px #ffc4cd inset;
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
  background-color: #fdfdfd;
  background-image: url(https://www.chabadofpicfairvillage.com/media/images/1289/fzPS12894239.jpeg), url(https://www.chabadofpicfairvillage.com/media/images/1289/SfXh12894926.jpeg);
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
	#content#content {
		margin-top: 0;
	}

.chabad_header {
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

	#donate#donate {
		margin-block: 0;
	}
</style>

<div class="chabad_header">
	<div class="headerTitle">
		<a href="/6041681" style="text-decoration:none">
			HIGH HOLIDAY APPEAL
		</a>
	</div>
</div>
        `;
	}

	if (footer) {
		footer.outerHTML = `
        <div id="BodyContainer">
	<div class="g960 footer">
		<div class="poweredby large_bottom_margin">
			<div class="footer3">
				<span class="footer-title">Chabad of Picfair Village</span>
				<div class="footer-address">
					<span class="footer-street">1656 S Ogden Drive </span>
					<span class="footer-city-state">Los Angeles, CA 90019</span>
				</div>
				<span>310-503-0060</span>
			</div>
			<img src="https://w2.chabad.org/images/global/spacer.gif" width="1" height="6" border="0"><br>
			Powered by <a href="https://www.chabad.org/" target="_new" class="">Chabad.org</a> © 1993-2024 <a href="/4026210" target="_blank" class="privacy-link">Privacy Policy</a>
		</div>
	</div>
</div>
        `;
	}

	const introWrapper = document.querySelector('.intro-wrapper .col');

	if (introWrapper) {
		introWrapper.innerHTML = `
            <img src="/media/images/1289/fzPS12894239.jpeg" style="max-width: min(500px, 100%); margin: auto; display: block;" class="mobile-only" alt="" />

<h1 style="font-weight: bold;">Support Our Jewish Community during the High Holidays!</h1>

<p class="description">This past year has been challenging for Jewish communities worldwide. People in our own community are facing difficulties, feeling isolated, misunderstood, and even attacked as antisemitism has spiked globally. Since October 7, more people than ever are seeking a place where they can engage, connect, and rediscover their roots in a welcoming environment.</p>

<p class="description"><b>You can help! You can give them that space.</b> You can provide a sanctuary of comfort, connection, and Jewish pride during the High Holidays and all year long! Your contribution will help create a warm, welcoming space for everyone in our community.</p>

<h2><b>Add Your Name to the Caring Wall!</b></h2>

<p class="description">In a beautiful display of care and unity, your name(s) will be listed on our <b>Caring Wall</b>, a special High Holidays donor display that demonstrates our community's commitment to one another. (Requests for anonymity will be respected.)</p>

<p class="description">Every gift counts. Whether you can give $180, $360, or more, your support will have a direct and lasting impact on the people in our community.</p>

<p class="description"><b>Together, we can make this year’s High Holidays a time of joy, unity, and spiritual renewal for our community.</b></p>
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
            <button class="js-amounts-button" type="button" data-amount="500">$500</button>
            <button class="js-amounts-button" type="button" data-amount="1800">$1,800</button>
            <button class="js-amounts-button" type="button" data-amount="3600">$3,600</button>
          `;
	}

	const submitButton = document.querySelector('.js-donate-button');

	if (submitButton) {
		const newText = document.createElement('p');
		newText.className = 'submission-additional-text';
		newText.innerHTML = `
        Every gift counts. Whether you can give $180, $360, or more, your support will have a direct and lasting impact on the people in our community.<br/><br/>
        Together, we can make this year’s High Holidays a time of joy, unity, and spiritual renewal for our community.<br/><br/>
        Thank you for standing with us and helping to keep Jewish traditions alive and vibrant!
      `;

		submitButton.parentElement.appendChild(newText);
	}

	const container = document.querySelector('.screen-1');
	if (container) {
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