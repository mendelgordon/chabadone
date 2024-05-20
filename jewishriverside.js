if (window.location.href.includes(4970020)) {
	const subscribe = document.querySelector("label[for='subscribe']");
	if (subscribe) {
		subscribe.parentElement.parentElement.parentElement.remove();
	}
}
const header = document.querySelector("#header");
if (header) {
	header.classList.add("on-scroll");
}