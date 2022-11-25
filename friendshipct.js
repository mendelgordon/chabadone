const CURRENTPATHNAME = window.location.pathname;
const GATHERINGOFUNITY = CURRENTPATHNAME.includes("5689686") || CURRENTPATHNAME.includes("5689710") || CURRENTPATHNAME.includes("5689724") || CURRENTPATHNAME.includes("5689778") || CURRENTPATHNAME.includes("5692000");
const VOLUNTEERFORM = CURRENTPATHNAME.includes("5151994");

if (GATHERINGOFUNITY) {
	// ADD LINK TO STYLE TO HEAD
	const LINK = document.createElement("link");
	LINK.rel = "stylesheet";
	LINK.href = "https://chabad.netlify.app/friendshipct.css";
	document.head.appendChild(LINK);
}

if (VOLUNTEERFORM) {
	window.addEventListener("DOMContentLoaded", () => {
		const partTwoInput = document.querySelector("#input_60_0");
		const partTwo = document.querySelectorAll("#id_60 ~ *");
		const stayHidden = document.querySelector('input[name="website"]').parentElement;

		const controlDisplayOfFormFields = () => {
			if (partTwoInput.checked) {
				partTwo.forEach((el) => {
					el.style.display = "grid";
				});
				stayHidden.style.display = "none";
			} else {
				partTwo.forEach((el) => {
					el.style.display = "none";
				});
			}
		};

		controlDisplayOfFormFields();

		partTwoInput.addEventListener("change", controlDisplayOfFormFields());
	});
}
