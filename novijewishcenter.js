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
}
