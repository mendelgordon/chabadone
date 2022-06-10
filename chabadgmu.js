/* when the document loads, run the function */
window.addEventListener("DOMContentLoaded", () => {
  /* new donate page */
  if (window.location.href.includes("4970020")) {
    document.querySelector("div.footnotes div.disclaimer").innerHTML = 'Have any questions or need help making your donation? Please call us at <span class="phone-number">414-807-4533</span>\n\t\t\t\t\t\t\t\t  or email&nbsp;<a href="mailto:rabbi@chabadgmu.com">rabbi@chabadgmu.com</a>\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t  ';
    document.querySelector(".description").insertAdjacentHTML("beforeend", "<b><br><br>Zelle: rabbi@chabadgmu.com<br><a href='https://www.paypal.com/paypalme/chabadgmu'>Click here for PayPal</a><br><a href='https://cash.app/$chabadgmu'>Click here for Cashapp</a></b>");
  }
});
