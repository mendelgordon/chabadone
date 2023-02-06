window.addEventListener("DOMContentLoaded", () => {
	if (window.location.href.includes("4970020")) {
		/* move dedication/note field to the first column instead of the second */
		const dedication = document.querySelector("label[for='notes']");
		if (dedication) {
			container = dedication.parentNode.parentNode.parentNode;
			/* put container at the end of .content-box.screen-2	*/
			const contentBox = document.querySelector(".content-box.screen-2");
			contentBox.appendChild(container);
		}
	}
});
