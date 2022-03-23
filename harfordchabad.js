const pageURL = window.location.href === 'https://www.harfordchabad.org/templates/fundraising/default_cdo/aid/5468598/jewish/Campaign.htm';
console.log(pageURL);
window.onload = () => {
   if (pageURL) {
      console.log('harfordchabad.js');
      const buttonOne = document.querySelector('div.fs-top-tools > div > a');
      console.log(buttonOne);
      const buttonTwo = document.querySelector('div.jumbotron.fs-header > div > div > div > div:nth-child(1) > div');
      console.log(buttonTwo);
      const buttonThree = document.querySelector('div.button-wrapper.col-md-6 > a');
      console.log(buttonThree);
      let inputRecurring = document.querySelector('#inputRecurring');
      console.log(inputRecurring);
      let inputRecurringLabel = document.querySelector('.fs-donate-section > div:nth-child(4) > label');
      console.log(inputRecurringLabel);
      const clickRecurring = () => {
         console.log('clicked');
         setTimeout(() => {
            if (inputRecurring.checked === false) {
               inputRecurringLabel.click();
               console.log('Recurring donation clicked');
            } else {
               inputRecurring.checked = true;
               console.log('Recurring donation checked');
            }
         }, 250);
         return true;
      };
      console.log(clickRecurring);
      // when any of the buttons are clicked, click the recurring button
      buttonOne.addEventListener('click', clickRecurring);
      console.log('buttonOne event listener added');
      buttonTwo.addEventListener('click', clickRecurring);
      console.log('buttonTwo event listener added');
      buttonThree.addEventListener('click', clickRecurring);
      console.log('buttonThree event listener added');
   }
};