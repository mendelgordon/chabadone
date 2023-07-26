const numberOfTicketsDisplayed = document.querySelector(".row h4")?.innerText;

// check if there are no tickets displayed
if (numberOfTicketsDisplayed === "0 incidents matched your filter:") {
	// reload the page after 10 minutes to check for new tickets
	console.log("refreshing the page after 10 minutes to check for new tickets");
	setTimeout(() => {
		window.location.reload();
	}, 600000);
} else {
	// reload the page after 30 minutes to check for new tickets
	console.log("refreshing the page after 30 minutes to check for new tickets");
	setTimeout(() => {
		window.location.reload();
	}, 1800000);
}

// add the number of tickets displayed to the page title
const pageTitle = document.querySelector("title");
const exactNumberOfTicketsDisplayed = numberOfTicketsDisplayed?.split(" ")[0];
if (exactNumberOfTicketsDisplayed === "1") {
	pageTitle.innerText = `${exactNumberOfTicketsDisplayed} ticket`;
} else {
	pageTitle.innerText = `${exactNumberOfTicketsDisplayed} tickets`;
}