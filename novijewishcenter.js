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
		/* change innerHTML of paypal	instructions from '\n\t\t\t\t\t\t\t  Click Donate below to complete your donation on PayPal’s site....\n\t\t\t\t\t\t  ' to Click the donate icon below to complete your donation by credit card (We use PayPal to process credit card donations).*/
		paypalInstructions.innerHTML = "Click the donate icon below to complete your donation by credit card (We use PayPal to process credit card donations).";
	}
	/* move dedication/note field to the first column instead of the second */
	const dedication = document.querySelector("label[for='notes']");
	if (dedication) {
		container = dedication.parentNode.parentNode.parentNode;
		/* put container at the end of .content-box.screen-2	*/
		const contentBox = document.querySelector(".content-box.screen-2");
		contentBox.appendChild(container);
	}
}
