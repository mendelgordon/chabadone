/* hide subscribe option on donate page */
window.addEventListener("load", () => {
  if (window.location.href.includes("4970020")) {
    document.querySelector('label[for="subscribe"]').closest(".row").style.display = "none";
  }
});
