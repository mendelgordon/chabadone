window.addEventListener("DOMContentLoaded", () => {
	if (window.location.href.includes(4970020)) {
		const text1 = `<div class="row"><div class="col flex-1"><div class="field-wrapper js-field-wrapper no-value checkbox-wrapper"><label for="dedication"><input type="checkbox" value="0" name="dedication" id="dedication">Yes! I want to make a donation in memory of someone special or to honor someone for a special occasion or for something special they did.</label></div></div></div>`;
		const text3 = `<div class="row" id="information"><div class="col flex-1"><p>A notification of the donation, including in whose honor/memory it was made (not the amount), will be sent to the family in whose honor/memory the donation has been made, and will appear in our email newsletter.</p></div></div>`;
		const text4 = `<div class="row" id="questions"><div class="col flex-1"><ol><li>How would you like your name/family to appear in the dedication?</li><li>Where should the notification be sent: (Include address/es if needed)</li><li>Would you like your donation to remain anonymous?</li></ol></div></div>`;
		const subscribe = document.querySelector("label[for=subscribe]").closest(".row");
		const col1 = document.querySelector("#js-donate-form > div:nth-child(4)");
		const col2 = document.querySelector("#js-donate-form > div:nth-child(5)");
		const notes = document.querySelector("label[for=notes]").closest(".row");
		notes.style.display = "none";
		col1.insertAdjacentHTML("beforeend", text1);
		const text = document.querySelector("#dedication").closest(".row");
		document.querySelector("#dedication").addEventListener("change", () => {
			if (document.querySelector("#dedication").checked) {
				text.insertAdjacentHTML("afterend", text4);
				text.insertAdjacentHTML("afterend", text3);
				notes.style.display = "block";
			} else {
				document.querySelector("#information").remove();
				document.querySelector("#questions").remove();
				notes.style.display = "none";
			}
		});
		document.querySelector("#phone").required = true;
		document.querySelector("label[for=phone]").innerHTML = 'Phone<span class="req">*</span>';
		col2.appendChild(subscribe);
		col1.appendChild(notes);
	}
});
