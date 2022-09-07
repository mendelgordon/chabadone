const popupSubscribeMessage = document.querySelector("#PopupSubscribeMessage");
if (popupSubscribeMessage) {
	const firstLastNameInputs = '<div class="clearfix" style="padding: 4px 0;"><input type="text" maxlength="50" class="co_global_input float_left active" style="width: 49%;" value="" required="" display_name="Name" id="Fname" name="fname" placeholder="Name"><input type="text" maxlength="50" class="co_global_input float_right active" style="width: 49%;" value="" required="" display_name="Address" id="Lname" name="lname" placeholder="Address"></div>';
	const popupSubscribeForm = document.querySelector("#PopupSubscribeMessage form div div");
	if (popupSubscribeForm) {
		popupSubscribeForm.style.height = "auto";
		popupSubscribeForm.insertAdjacentHTML("afterbegin", firstLastNameInputs);
	}
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
