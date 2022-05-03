/* when the document loads, run the function */
window.addEventListener('DOMContentLoaded', () => {
   try {
      const donateDescription = document.querySelector('#js-donate-form > div.content-box.full-row.intro-wrapper > div > p');
      const newDonateDescription = `<a href="/5430417">To donate with Venmo click here <img src="https://cdn1.venmo.com/marketing/images/branding/venmo-icon.svg" style="height: 14px;"></a><br /><a href="https://www.theeidenproject.org">To donate to the Eiden Project click here</a><br /><a href="/3438459">To reserve for Friday night dinner click here</a>`;
      donateDescription.innerHTML = newDonateDescription;
   } catch (error) {
      console.log(error);
   }
});
