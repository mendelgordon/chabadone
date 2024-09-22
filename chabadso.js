const pageURL = window.location.pathname;

if (pageURL.includes(4970020)) {
	const newStyles = `
<style>
#donate-wrapper {
  background: #f6f6f2;
}
#donate-wrapper #donate {
  background-color: #fdfdfd;
}
#donate-wrapper h1,
#donate-wrapper h2 {
  color: #891738;
  font-weight: 800 !important;
}
#donate-wrapper .button,
#donate-wrapper .next-button,
#donate-wrapper .donate-button {
  background-color: #891738;
  color: white;
}
#donate-wrapper .button:hover,
#donate-wrapper .next-button:hover,
#donate-wrapper .donate-button:hover {
  background-color: #891738;
}
#donate-wrapper main .amounts button {
    background-color: #f47d2d;
    color: black;
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
  margin-block: 1em;
}
@media screen and (min-width: 1001px) {
  #donate-wrapper .mobile-only {
    display: none !important;
  }
}
section#donate.screen-2 h1 ~ * {
  display: none !important;
}
#donate-wrapper main .amounts {
  justify-content: space-around;
}
  #donate-wrapper button.donate-button {
    margin-bottom: 50px;
}
  .submission-additional-text {
	font-weight: bold;
	padding-top: 20px;
	}
</style>`;

	document.head.insertAdjacentHTML('beforeend', newStyles);

	const introWrapper = document.querySelector('.intro-wrapper .col');

	if (introWrapper) {
		introWrapper.innerHTML = `
<h1 style="font-weight: bold;">Add Your Name to the Caring Wall!</h1>

            <img src="/media/images/1292/hJzv12922406.png" style="max-width: min(300px, 100%); margin: auto; display: block;padding-bottom: 30px;" alt="" />

<h1 style="font-weight: bold;">Support Our Jewish Community during the High Holidays!</h1>

<p class="description">This past year has been challenging for Jewish communities worldwide. People in our own community are facing difficulties, feeling isolated, misunderstood, and even attacked as antisemitism has spiked globally. Since October 7, more people than ever are seeking a place where they can engage, connect, and rediscover their roots in a welcoming environment.</p>

<p class="description"><b>You can help! You can give them that space.</b> You can provide a sanctuary of comfort, connection, and Jewish pride during the High Holidays and all year long! Your contribution will help create a warm, welcoming space for everyone in our community.</p>

<p class="description">In a beautiful display of care and unity, your name(s) will be listed on our <b>Caring Wall</b>, a special High Holidays donor display that demonstrates our community's commitment to one another. <i>(Requests for anonymity will be respected.)</i></p>

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

	const submitButton = document.querySelector('.js-donate-button');

	const afterSubmitMessage = `
	<p class="submission-additional-text">Your donation to our High Holidays Campaign will ensure:</p>
<ul>
	<li>A welcoming place to celebrate.</li>
	<li>A supportive community to be part of and to lean on.</li>
	<li>An opportunity to grow their Jewish pride in the face of uncertainty.</li>
</ul>
<p class="submission-additional-text">Your generosity will help create a warm and welcoming environment for our community!</p>`;

	submitButton.insertAdjacentHTML('afterend', afterSubmitMessage);

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