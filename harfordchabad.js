const pageURL = window.location.href === 'https://www.harfordchabad.org/templates/fundraising/default_cdo/aid/5468598/jewish/Campaign.htm';
const pageURL2 = window.location.href === 'https://www.harfordchabad.org/Templates/Fundraising/Default_cdo/aid/5468598/donate/1';
window.onload = () => {
   if (pageURL) {
      const buttonOne = document.querySelector('div.fs-top-tools > div > a');
      const buttonTwo = document.querySelector('div.jumbotron.fs-header > div > div > div > div:nth-child(1) > div');
      const buttonThree = document.querySelector('div.button-wrapper.col-md-6 > a');
      let inputRecurring = document.querySelector('#inputRecurring');
      let inputRecurringLabel = document.querySelector('.fs-donate-section > div:nth-child(4) > label');
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
      buttonOne.addEventListener('click', clickRecurring);
      buttonTwo.addEventListener('click', clickRecurring);
      buttonThree.addEventListener('click', clickRecurring);
   } else if (pageURL2) {
      setTimeout(() => {
         if (inputRecurring.checked === false) {
            inputRecurringLabel.click();
         } else {
            inputRecurring.checked = true;
         }
      }, 250);
   }
};