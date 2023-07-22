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
	const chaiClubButtons = document.querySelectorAll(".chai-club");
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
} catch (error) {
	console.error(error);
}
