// add a button to the header for the Chai Club
const donateButtonOne = document.querySelector(".donate-button");
const headerChaiClub = `<div class="donate-button"><div class="donate-button-text common-donate chai-club">Join the Monthly Giving (Chai) Club!</div></div>`;
// if headerChaiClub wasn't yet added, add it
if (!document.querySelector(".chai-club.common-donate")) {
	donateButtonOne?.insertAdjacentHTML("afterend", headerChaiClub);
}

// add a button to the main section for the Chai Club
const donateSection = document.querySelector(".fs-donate.fs-donatable");
const mainChaiClub = `<div class="button-wrapper col-md-10"><div class="btn fs-btn chai-club" style="background: #3da7ce;white-space:break-spaces">Join the Monthly Giving (Chai) Club!<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></div></div>`;
// if mainChaiClub wasn't yet added, add it
if (!document.querySelector(".chai-club.fs-btn")) {
	donateSection?.insertAdjacentHTML("beforeend", mainChaiClub);
}

// make the Chai Club buttons open the donate page with the monthly option selected
const chaiClubButtons = document.querySelectorAll(".chai-club");
const monthly = document.querySelector("#inputRecurring");
const donateButtonTwo = document.querySelector(".fs-donate.fs-donatable > .button-wrapper > a");
chaiClubButtons.forEach((button) => {
	button.onclick = function () {
		// if monthly was not yet pressed, press monthly
		if (!monthly?.checked) {
			monthly?.click();
		}
		// open the donate page
		donateButtonTwo?.click();
	};
});
