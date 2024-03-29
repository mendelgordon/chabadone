const nameCollection = () => {
	const popupSubscribeMessage = document.querySelector("#PopupSubscribeMessage");
	if (popupSubscribeMessage) {
		const name = popupSubscribeMessage.querySelector("#Fname");
		name.placeholder = "Name";
		name.attributes.display_name.value	= "Name";
		const address = popupSubscribeMessage.querySelector("#Lname");
		address.placeholder = "Address";
		address.attributes.display_name.value = "Address";
	}
	const homeSubscribeMessage = document.querySelector("div.hp-row.hp_subscribe");
	if (homeSubscribeMessage) {
		const firstNameInputLabel = document.querySelector(".hp_subscribe form > fieldset > label:nth-child(1)");
		const firstNameInput = document.querySelector(".hp_subscribe #Fname");
		const lastNameInputLabel = document.querySelector(".hp_subscribe form > fieldset > label:nth-child(3)");
		const lastNameInput = document.querySelector(".hp_subscribe #Lname");
		if (firstNameInputLabel && firstNameInput && lastNameInputLabel && lastNameInput) {
			firstNameInputLabel.innerHTML = "Name";
			firstNameInput.placeholder = "Name";
			firstNameInput.vmessage = "Please enter name";
			lastNameInputLabel.innerHTML = "Address";
			lastNameInput.placeholder = "Address";
			lastNameInput.vmessage = "Please enter address";
		}
	}
};
window.addEventListener("DOMContentLoaded", nameCollection);
