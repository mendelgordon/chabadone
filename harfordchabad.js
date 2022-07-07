window.addEventListener("load", () => {
	const pageURL = Co.ArticleId === "5468598";
	const pageURL2 = window.location.href === "https://www.harfordchabad.org/Templates/Fundraising/Default_cdo/aid/5468598/donate/1";
	const pageURL3 = window.location.href.includes("blog");
	if (pageURL) {
		const buttonOne = document.querySelector("div.fs-top-tools > div > a");
		const buttonTwo = document.querySelector("div.jumbotron.fs-header > div > div > div > div:nth-child(1) > div");
		const buttonThree = document.querySelector("div.button-wrapper.col-md-6 > a");
		let inputRecurring = document.querySelector("#inputRecurring");
		let inputRecurringLabel = document.querySelector(".fs-donate-section > div:nth-child(4) > label");
		const clickRecurring = () => {
			setTimeout(() => {
				if (inputRecurring.checked === false) {
					inputRecurringLabel.click();
				} else {
					inputRecurring.checked = true;
				}
			}, 250);
			return true;
		};
		// when any of the buttons are clicked, click the recurring button
		buttonOne.addEventListener("click", clickRecurring);
		buttonTwo.addEventListener("click", clickRecurring);
		buttonThree.addEventListener("click", clickRecurring);
	} else if (pageURL2) {
		let inputRecurring = document.querySelector("#inputRecurring");
		let inputRecurringLabel = document.querySelector(".fs-donate-section > div:nth-child(4) > label");
		setTimeout(() => {
			if (inputRecurring.checked === false) {
				inputRecurringLabel.click();
			} else {
				inputRecurring.checked = true;
			}
		}, 250);
	} else if (pageURL3) {
		/* this is to make the blog sidebar show on the side instead of the bottom */
		const body = document.getElementById("co_body_container");
		const sidebar = document.getElementById("co_ads_container");
		if (body) {
			body.style.display = "inline-block";
		}
		if (sidebar) {
			sidebar.style.float = "right";
		}
	}
});
