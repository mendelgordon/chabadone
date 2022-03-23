if (Co.ArticleId === '5468598') {
   const buttonOne = document.querySelector('div.fs-top-tools > div > a');
   const buttonTwo = document.querySelector('div.jumbotron.fs-header > div > div > div > div:nth-child(1) > div');
   const buttonThree = document.querySelector('div.button-wrapper.col-md-6 > a');
   const buttonFour = document.querySelector('#donors > div > div.js-donors-list > div > a');
   // array of buttons
   let inputRecurring = document.querySelector('#inputRecurring');
   let inputRecurringLabel = document.querySelector('.fs-donate-section > div:nth-child(4) > label');
   const clickRecurring = () => {
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
   // when any of the buttons are clicked, click the recurring button
   buttonOne.addEventListener('click', clickRecurring);
   buttonTwo.addEventListener('click', clickRecurring);
   buttonThree.addEventListener('click', clickRecurring);
   buttonFour.addEventListener('click', clickRecurring);
}
