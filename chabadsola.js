/* when the document loads, run the function */
window.addEventListener("load", () => {
	/* new donate page */
	if (window.location.href.includes(4970020)) {
		const donateDescription = document.querySelector("#js-donate-form > div.content-box.full-row.intro-wrapper > div > p");
		const newDonateDescription = `<a href="/thesolatent">For The SOLA Tent click here</a><br /><a href="/crypto">To donate in Crypto click here <img src="https://thegivingblock.com/wp-content/uploads/2021/07/Bitcoin-btc-Logo.png" style="height:14px"></a><br /><a href="/5430417">To donate with Venmo click here <img src="https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg" style="height: 14px;"></a><br /><a href="https://www.theeidenproject.org">To donate to the Eiden Project click here</a><br /><a href="/3438459">To reserve for Friday night dinner click here</a>`;
		donateDescription.innerHTML = newDonateDescription;
		document.querySelector("#subscribe").checked = 0;
		return;
	}
	/* SOLA tent membership page */
	if (window.location.href.includes(5511888)) {
		const tentMembership = document.querySelector("input[value=Monthly]");
		tentMembership.checked = 1;
		tentMembership.closest(".form-line").style.display = "none";
		return;
	}
	/* SOLA tent new combined form */
	if (window.location.href.includes(5511892)) {
		const intention = document.querySelector("#input_8");
		if (window.location.href.includes("tribe")) {
			intention.selectedIndex = 1;
			intention.triggerEvent("change");
			return;
		}
		if (window.location.href.includes("sponsor")) {
			intention.selectedIndex = 2;
			intention.triggerEvent("change");
			return;
		}
		if (window.location.href.includes("gift")) {
			intention.selectedIndex = 3;
			intention.triggerEvent("change");
			return;
		}
		if (window.location.href.includes("donate")) {
			intention.selectedIndex = 4;
			intention.triggerEvent("change");
			return;
		}
	}
	/* redirect old donate page to new donate page */
	if (window.location.href.includes(3434581)) {
		window.location.href = "/donate";
		return;
	}
});
