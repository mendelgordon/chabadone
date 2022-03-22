if (Co.ArticleId === '5468598') {
   // select all divs on the page
   const divs = document.querySelectorAll('div');
   const inputRecurring = document.querySelector('#inputRecurring');
   // when any of the divs are clicked, click the recurring donation button after a delay
   divs.forEach(div =>
      div.addEventListener('click', () => {
         setTimeout(() => {
            if (inputRecurring && inputRecurring.checked === false) {
               inputRecurring.click();
               inputRecurring.checked = true;
               console.log('Recurring donation clicked');
            } else {
               console.log('Recurring donation not found');
            }
         }, 250);
      })
   );
}
