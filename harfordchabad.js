if (Co.ArticleId === '5468598') {
   const buttonOne = document.querySelector('div.fs-top-tools > div > a');
   const buttonTwo = document.querySelector('div.jumbotron.fs-header > div > div > div > div:nth-child(1) > div');
   const buttonThree = document.querySelector('div.button-wrapper.col-md-6 > a');
   const buttonFour = document.querySelector('#donors > div > div.js-donors-list > div > a');
   // array of buttons
   const buttons = [buttonOne, buttonTwo, buttonThree, buttonFour];
   const inputRecurring = document.querySelector('#inputRecurring');
   const inputRecurringLabel = document.querySelector('.fs-donate-section > div:nth-child(4) > label');
   const clickRecurring = () => {
      setTimeout(() => {
         if (inputRecurringLabel && inputRecurring.checked === false) {
            inputRecurringLabel.click();
            inputRecurring.checked = true;
            console.log('Recurring donation clicked');
         } else {
            console.log('Recurring donation not found');
         }
      }, 250);
   };
   // when any of the buttons are clicked, click the recurring button
   buttons.forEach(button => button.addEventListener('click', clickRecurring));
}
