/* when the document loads, run the function */
window.addEventListener("DOMContentLoaded", () => {
	/* new donate page */
	if (window.location.href.includes(4970020)) {
		const donateDescription = document.querySelector("#js-donate-form div.content-box p.description");
		const newDonateDescription = `<a href="/thesolatent">For The SOLA Tent click here</a><br /><a href="/crypto">To donate in Crypto click here <img src="https://thegivingblock.com/wp-content/uploads/2021/07/Bitcoin-btc-Logo.png" style="height:14px"></a><br /><a href="/5430417">To donate with Venmo click here <img src="https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg" style="height: 14px;"></a><br /><a href="https://www.theeidenproject.org">To donate to the Eiden Project click here</a><br /><a href="/3438459">To reserve for Friday night dinner click here</a>`;
		if (donateDescription) {
			donateDescription.innerHTML = newDonateDescription;
		}
		const subscribe = document.querySelector("#subscribe");
		if (subscribe) {
			subscribe.checked = 0;
		}
		const recurring = document.querySelector("#frequency-toggle .monthly");
		const oneTime = document.querySelector("#frequency-toggle .one-time");
		const notes = document.querySelector("label[for=notes]");
		if (notes) {
			notes.innerHTML = "Dedication or Note (e.g. Kiddush, Shteibel, or SOLA)";
		}
		if (recurring && notes) {
			const newRow = document.createElement("div");
			newRow.classList.add("row", "new-row");
			const col1 = document.createElement("div");
			col1.classList.add("col", "flex-1");
			const fieldWrapper = document.createElement("div");
			fieldWrapper.classList.add("field-wrapper", "js-field-wrapper", "no-value");
			const label = document.createElement("label");
			label.setAttribute("for", "x_recurrences");
			label.innerHTML = "Number of Months";
			const input = document.createElement("input");
			input.setAttribute("id", "recurrences");
			input.setAttribute("name", "x_recurrences");
			input.setAttribute("type", "text");
			input.setAttribute("display_name", "recurrences");
			input.classList.add("active", "recurrences-input");
			fieldWrapper.appendChild(label);
			fieldWrapper.appendChild(input);
			col1.appendChild(fieldWrapper);
			newRow.appendChild(col1);
			/* add an input field asking	for the number of months after the notes */
			notes.closest(".content-box").insertBefore(newRow, notes.closest(".row"));
			newRow.style.display = "none";
			const recurrencesInput = document.querySelector(".recurrences-input");
			recurring.addEventListener("click", () => {
				newRow.style.display = "flex";
			});
			oneTime.addEventListener("click", () => {
				/* remove the input field asking for the number of months after the notes */
					newRow.style.display = "none";
					recurrencesInput.value = "";
			});
			newRow.addEventListener("focusin", () => {
				newRow.parentNode.classList.add("focused");
			});
			newRow.addEventListener("focusout", () => {
				newRow.parentNode.classList.remove("focused");
			});
			return;
		}
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
