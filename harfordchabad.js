if (Co.ArticleId === '5468598') {
   const donateButton = document.querySelector('.js-action-open-donate');
   const inputRecurring = document.querySelector('#inputRecurring');
   // when the donate button is clicked, click the recurring donation button
   donateButton.addEventListener('click', () => {
      inputRecurring.click();
      inputRecurring.checked = true;
   });
}
