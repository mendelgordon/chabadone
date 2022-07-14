window.addEventListener("load", () => {
	const anonymousCheckbox = document.querySelector("#inputAnonymous");
	if (anonymousCheckbox) {
		anonymousCheckbox.parentElement.remove();
	}
});
