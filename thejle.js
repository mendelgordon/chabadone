const popupSubscribeMessage = document.querySelector("#PopupSubscribeMessage");
if (popupSubscribeMessage) {
	const firstLastNameInputs = '<div class="clearfix" style="padding: 4px 0;"><input type="text" maxlength="50" class="co_global_input float_left active" style="width: 49%;" value="" required="" display_name="Name" id="Fname" name="fname" placeholder="Name"><input type="text" maxlength="50" class="co_global_input float_right active" style="width: 49%;" value="" required="" display_name="Location" id="Lname" name="lname" placeholder="Location"></div>';
	const popupSubscribeForm = document.querySelector("#PopupSubscribeMessage form div div");
	popupSubscribeForm.style.height = "auto";
	popupSubscribeForm.insertAdjacentHTML("afterbegin", firstLastNameInputs);
}
