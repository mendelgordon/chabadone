const bronze = document.querySelector('#bronze');
const silver = document.querySelector('#silver');
const gold = document.querySelector('#gold');
const input = document.querySelector(
  '.fs-donate-amounts.js-donate-amounts > input'
);
const donate = document.querySelector(
  '.fs-donate.fs-donatable > .button-wrapper > a'
);
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
const addMethods = () => {
   const check = document.querySelector('.fs-payment-method > label:nth-child(2)');
   // set classes on check to "radio-inline selected"
   const selectCheck = () => (check.className = 'radio-inline selected');
   check.onclick = selectCheck;
   const openCrypto = () => window.open('https://www.bitdonate.com/embed/donate/chabad-of-the-valley-inc-8451564', '_blank') && selectCheck();
   const openPaypal = () => window.open('https://PayPal.me/chabadofthevalley', '_blank') && selectCheck();
   const paymentSection = document.querySelector('.fs-payment-method');
   const crypto = `<label class="radio-inline" onclick="openCrypto()"><input type="radio" name="payment_method" value="Crypto" required="" data-show-block="#CustomPaymentMessage" data-show-donate-processing="False" display_name="payment type"><span>Crypto</span></label>`;
   // if crypto wasn't yet added, add it after a delay of 0.25 seconds
   if (!paymentSection.innerHTML.includes('Crypto')) {
      setTimeout(function () {
         paymentSection.insertAdjacentHTML('beforeend', crypto);
      }, 250);
   }
   const paypal = `<label class="radio-inline" onclick="openPaypal()"><input type="radio" name="payment_method" value="PayPal" required="" data-show-block="#CustomPaymentMessage" data-show-donate-processing="False" display_name="payment type"><span>PayPal</span></label>`;
   // if paypal wasn't yet added, add it after a delay of 0.25 seconds
   if (!paymentSection.innerHTML.includes('PayPal')) {
      setTimeout(function () {
         paymentSection.insertAdjacentHTML('beforeend', paypal);
      }, 250);
   }
};
const buttonOne = document.querySelector('div.fs-top-tools > div > a');
const buttonTwo = document.querySelector('div.jumbotron.fs-header > div > div > div > div:nth-child(1) > div');
const buttonThree = document.querySelector('div.button-wrapper.col-md-6 > a');
buttonOne.addEventListener('click', addMethods);
buttonTwo.addEventListener('click', addMethods);
buttonThree.addEventListener('click', addMethods);