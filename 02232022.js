const bronze = document.querySelector("#bronze");
const silver = document.querySelector("#silver");
const gold = document.querySelector("#gold");
const input = document.querySelector("div.fs-donate-amounts.js-donate-amounts.col-md-6.prevent-width-set > input");
const donate = document.querySelector("div.col-md-6.fs-donate.fs-donatable.text-center.vertical-align.d-js-viewport-in > div.button-wrapper.col-md-6 > a");
const monthly = document.querySelector("#inputRecurring");
// onclick of bronze type type 108 into the input field, press donate button, and press monthly
bronze.onclick = function() {
  input.value = 108;
  donate.click();
  monthly.click();
}
// onclick of silver type type 180 into the input field, press donate button, and press monthly
silver.onclick = function() {
  input.value = 180;
  donate.click();
  monthly.click();
}
// onclick of gold type type 250 into the input field, press donate button, and press monthly
gold.onclick = function() {
  input.value = 250;
  donate.click();
  monthly.click();
}