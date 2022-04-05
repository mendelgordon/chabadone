const bronze = document.querySelector('#bronze');
const silver = document.querySelector('#silver');
const gold = document.querySelector('#gold');
const input = document.querySelector('.fs-donate-amounts.js-donate-amounts > input');
const donate = document.querySelector('.fs-donate.fs-donatable > .button-wrapper > a');
const clickDonate = () => {
   donate.click();
};
const clickMonthly = () => {
   const monthly = document.querySelector('#inputRecurring');
   // if monthly was not yet pressed, press monthly after a delay of 0.25 seconds
   if (!monthly.checked) {
      setTimeout(function () {
         monthly.click();
      }, 250);
   }
};
// onclick of bronze type type 108 into the input field, press donate button, and press monthly
bronze.onclick = function () {
   input.value = 108;
   clickDonate();
   clickMonthly();
};
// onclick of silver type type 180 into the input field, press donate button, and press monthly
silver.onclick = function () {
   input.value = 180;
   clickDonate();
   clickMonthly();
};
// onclick of gold type type 250 into the input field, press donate button, and press monthly
gold.onclick = function () {
   input.value = 250;
   clickDonate();
   clickMonthly();
};
const buttonSection = document.querySelector('.donate-flex');
const paymentMethods = `<div class="donate-flex new-methods"><div class="donate-button "><div class="donate-button-text"><a href="https://paypal.com/us/fundraiser/charity/14535" style="color:inherit"><span>Donate with PayPal</span></a></div></div><div class="donate-button"><div class="donate-button-text"><a href="https://www.bitdonate.com/embed/donate/chabad-of-the-valley-inc-8451564" style="color:inherit"><span>Donate with Crypto</span></a></div></div></div>`;
// if paymentMethods wasn't yet added, add it after a delay of 0.25 seconds
if (!document.querySelector('.new-methods')) {
   setTimeout(function () {
      buttonSection.insertAdjacentHTML('afterend', paymentMethods);
   }, 250);
}
