/* if on donate page remove credit card payment option */
if (window.location.href.includes("4970020")) {
	/* select cc input fields and remove them from the DOM */
	const ccInput = document.querySelector(".credit-card-wrapper");
	if (ccInput) {
		ccInput.remove();
	}

	const ccIcon = document.querySelector('.icon-wrapper[data-type="credit-card"]');
	if (ccIcon) {
		ccIcon.remove();
	}

	/* select the next button and click it */
	const nextButton = document.querySelector(".icon-wrapper");
	if (nextButton) {
		nextButton.click();
	}

	/* select paypal donation instructions and move them from the parent div to the grandparent div, so they are before the donate button in the dom */
	const paypalInstructions = document.querySelector(".paypal-wrapper");
	if (paypalInstructions) {
		const donateButton = document.querySelector(".js-donate-button").parentNode.parentNode;
		paypalInstructions.removeAttribute("style");
		/* after a short delay, move the paypal instructions to the correct location */
		setTimeout(() => {
			paypalInstructions.removeAttribute("style");
			/* add screen-2 class and content-box class to paypal instructions so they are hidden */
			paypalInstructions.classList.add("screen-2", "content-box");
			/* change innerHTML of paypal	instructions from '\n\t\t\t\t\t\t\t  Click Donate below to complete your donation on PayPal’s site....\n\t\t\t\t\t\t  ' to Click the donate icon below to complete your donation by credit card (We use PayPal to process credit card donations).*/
			donateButton.parentNode.insertBefore(paypalInstructions, donateButton);
			paypalInstructions.innerHTML = "Click the donate icon below to complete your donation by credit card (We use PayPal to process credit card donations).";
		}, 1000);
	}
}
