const CURRENTPATHNAME = window.location.pathname;
const DONATE = CURRENTPATHNAME.includes("4970020");

if (DONATE) {
	const addSlideshow = () => {
		const iframe = `<iframe allow="autoplay *; fullscreen *" allowfullscreen="" data-dashlane-frameid="3305" frameborder="0" height="200" scrolling="no" src="https://rtcdn.cincopa.com/iframe.aspx?fid=AwKAv6-9ivM-" style="width:100%" width="600"></iframe>`;
		const wrapper = document.getElementById("ContentBody");
		// insert iframe after wrapper
		wrapper.insertAdjacentHTML("afterbegin", iframe);
	};
	window.addEventListener("DOMContentLoaded", addSlideshow);
}
