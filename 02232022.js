const bronze = document.querySelector("#bronze");
const silver = document.querySelector("#silver");
const gold = document.querySelector("#gold");
const input = document.querySelector(".fs-donate-amounts.js-donate-amounts > input");
const donate = document.querySelector(".fs-donate.fs-donatable.text-center > div.button-wrapper.col-md-6 > a");
const monthly = document.querySelector("#inputRecurring");
const clickDonate = () => {
  donate.click();
}
const clickMonthly = () => {
  // press monthly after a delay of 0.5 seconds
  setTimeout(function() {
    monthly.click();
  }, 500);
}
// onclick of bronze type type 108 into the input field, press donate button, and press monthly
bronze.onclick = function() {
  input.value = 108;
  clickDonate();
  clickMonthly();
}
// onclick of silver type type 180 into the input field, press donate button, and press monthly
silver.onclick = function() {
  input.value = 180;
  clickDonate();
  clickMonthly();
}
// onclick of gold type type 250 into the input field, press donate button, and press monthly
gold.onclick = function() {
  input.value = 250;
  clickDonate();
  clickMonthly();
}