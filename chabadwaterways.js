window.addEventListener("DOMContentLoaded", () => {
	if (window.location.href.includes(5512769)) {
		let items = document.querySelectorAll("#cid_3 label span");
		items.forEach((element) => {
			if (element.innerHTML.includes("-")) {
				element.innerHTML.split("-");
				element.innerHTML = "<strong>" + element.innerHTML.replace("-", "</strong> - ");
			}
			let spanText = element.innerText.toLowerCase();
			if (spanText.includes("reserved") || spanText.includes("dedicated")) {
				element.closest(".form-checkbox-item").classList.add("reserved-dedication");
			}
		});
		document.querySelector("#Head1").insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://chabad.netlify.app/chabadwaterways.css" />');
	}
	if (window.location.href.includes(5512724) || window.location.href.includes(5512752)) {
		document.querySelector("#Head1").insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://chabad.netlify.app/chabadwaterways.css" />');
	}
	if (window.location.href.includes(5242468)) {
		const styles = `<style>
		.form-all .label-message {
			font-weight: 600;
			font-size: inherit;
			color: #e3c188;
			.current {
				color: #b2401d;
			}
		}
		.form-line:has(.sold) {
			position: relative;
			& input {
				pointer-events: none;
			}
			&::after {
				content: "Sold";
				position: absolute;
				top: 20%;
				left: 19%;
				color: #b2401da8;
				font-weight: bold;
				font-size: 40px;
				transform: rotateZ(336deg);
			}
		}
		</style>`;
		document.head.insertAdjacentHTML("beforeend", styles);
		let items = document.querySelectorAll("label");
		items.forEach((element) => {
			// only for the ones with the word sold in the label
			if (element.innerText.includes("Sold")) {
				element.classList.add("sold");
			}
			if (element.innerText.includes("Current")) {
				element.classList.add("current");
			}
		});
	}
});
