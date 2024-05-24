import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

if (window.location.href.includes(4970020)) {
	const subscribe = document.querySelector("label[for='subscribe']");
	if (subscribe) {
		subscribe.parentElement.parentElement.parentElement.remove();
	}
}