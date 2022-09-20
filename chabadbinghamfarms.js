if (window.location.href.includes(5637523)) {
	let items = document.querySelectorAll("select option");
	items.forEach((element) => {
		if (element.innerHTML.toLowerCase().includes("reserved")) {
			element.disabled = true;
			console.log(`Disabled ${element.innerHTML} because it is reserved`);
		}
	});
	const entries = document.querySelectorAll(".form-line");
	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fadeIn");
				// stop observing this element
				observer.unobserve(entry.target);
			}
		});
	};
	const options = {
		threshold: 0.5,
	};
	const myObserver = new IntersectionObserver(callback, options);
	entries.forEach((formLine) => {
		myObserver.observe(formLine);
	});
}

if (window.location.href.includes(5637447)) {
	const entries = document.querySelectorAll(".co_body img");
	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fadeIn");
				// stop observing this element
				observer.unobserve(entry.target);
			}
		});
	};
	const options = {};
	const myObserver = new IntersectionObserver(callback, options);
	entries.forEach((img) => {
		myObserver.observe(img);
	});
}
