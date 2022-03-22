if (Co.ArticleId === '5468598') {
   // select all divs on the page
   const divs = document.querySelectorAll('div');
   const inputRecurring = document.querySelector('#inputRecurring');
   // when the donate button is clicked, click the recurring donation button after a delay
   divs.addEventListener('click', () => {
      setTimeout(() => {
         inputRecurring.click();
         inputRecurring.checked = true;
         console.log('clicked');
      }, 250);
   });
}
