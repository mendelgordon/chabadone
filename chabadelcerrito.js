try {
	// add a button to the header for the Chai Club
	const donateButton = document.querySelector(".donate-button");
	const headerChaiClub = `<div class="donate-button"><div class="donate-button-text common-donate chai-club">Join the Monthly Giving (Chai) Club!</div></div>`;
	// if headerChaiClub wasn't yet added, add it
	if (!document.querySelector(".chai-club.common-donate") && donateButton) {
		donateButton.insertAdjacentHTML("afterend", headerChaiClub);
	}

	// add a button to the main section for the Chai Club
	const donateSection = document.querySelector(".fs-donate.fs-donatable");
	const mainChaiClub = `<div class="button-wrapper col-md-10"><div class="btn fs-btn chai-club" style="background: #3da7ce;white-space:break-spaces">Join the Monthly Giving (Chai) Club!<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></div></div>`;
	// if mainChaiClub wasn't yet added, add it
	if (!document.querySelector(".chai-club.fs-btn") && donateSection) {
		donateSection.insertAdjacentHTML("beforeend", mainChaiClub);
	}

	// make the Chai Club buttons open the donate page with the monthly option selected
	const chaiClubButtons = Array.from(document.querySelectorAll(".chai-club")).concat(Array.from(document.querySelectorAll(".fs-about-text a[href='#']")));
	chaiClubButtons.forEach((button) => {
		button.onclick = function () {
			// open the donate page
			donateButton.childNodes[0].click();
			// if monthly was not yet pressed, press monthly after 250ms
			setTimeout(() => {
				if (document.querySelector("#inputRecurring") && !document.querySelector("#inputRecurring").checked) {
					document.querySelector("#inputRecurring").click();
				}
			}, 250);
		};
	});

	// make the donate buttons (.js-action-open-donate) open the donate page with the monthly option unselected
	const donateButtons = document.querySelectorAll(".js-action-open-donate");
	donateButtons.forEach((button) => {
		button.onclick = function () {
			// if monthly was pressed, unpress monthly after 50ms
			setTimeout(() => {
				if (document.querySelector("#inputRecurring") && document.querySelector("#inputRecurring").checked) {
					document.querySelector("#inputRecurring").click();
				}
			}, 50);
		};
	});

	// update the monthly option text to include the monthly donation amount
	const updateMonthlyText = () => {
		const inputRecurring = document.querySelector("label[for='inputRecurring']");
		const inputAmountField = document.querySelector(".fs-effective-donation-amount");
		const inputAmount = inputAmountField ? `${Number(inputAmountField.innerText.replace(/[^0-9.-]+/g, "")) / 2}` : "0";
		if (inputRecurring) {
			inputRecurring.innerText = `I would like to donate $${inputAmount} monthly`;
		}
	};

	// update the monthly option text to include the monthly donation amount when the donation amount is changed
	const monitorDonationAmounts = () => {
		setTimeout(() => {
			updateMonthlyText();
			const donationAmounts = document.querySelectorAll('input[name="x_amount"]');
			const otherAmount = document.querySelector(".js-other-amount");
			donationAmounts.forEach((amount) => {
				amount.addEventListener("change", updateMonthlyText);
			});
			if (otherAmount) {
				otherAmount.addEventListener("change", updateMonthlyText);
			}
		}, 50);
	};

	// add the donation amount change monitor when the donation page is opened
	donateButtons.forEach((button) => {
		button.addEventListener("click", monitorDonationAmounts);
	});

	// add venmo and cashapp links to the donate page
	const addVenmoAndCashApp = () => {
		const venmoLink = "https://venmo.com/code?user_id=2829341297737728336&created=1690099180";
		const venmoQR = "https://w2.chabad.org/media/images/1240/vqgH12401008.png";
		const cashappLink = "https://cash.app/$ChabadElCerrito";
		const cashAppQR = "https://cash.app/qr/$ChabadElCerrito?size=100&margin=5";
		const paymentSection = document.querySelector(".fs-payment-information");
		const paymentSectionHTML = `<div class="fs-donate-payment-methods"><div class="fs-donate-payment-methods-title">Donate with:</div><div class="fs-donate-payment-methods-buttons"><a href="${venmoLink}" target="_blank"><img src="${venmoQR}" alt="Venmo QR Code" style="width: 100px; height: 100px; margin: 10px;"></a><a href="${cashappLink}" target="_blank"><img src="${cashAppQR}" alt="Cash App QR Code" style="width: 100px; height: 100px; margin: 10px;"></a></div></div>`;
		if (paymentSection && !document.querySelector(".fs-donate-payment-methods")) {
			paymentSection.insertAdjacentHTML("beforebegin", paymentSectionHTML);
		}
	};
	window.addEventListener("load", addVenmoAndCashApp);
} catch (error) {
	console.error(error);
}
