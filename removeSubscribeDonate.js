/* hide subscribe option on donate page */
window.addEventListener("load", () => {
  if (window.location.href.includes("4970020")) {
    const subscribe = document.querySelector('label[for="subscribe"]');
    if (subscribe) subscribe.closest(".row").style.display = "none";
  }
});
