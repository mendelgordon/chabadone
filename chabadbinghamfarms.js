if (window.location.href.includes(5637523)) {
 let items = document.querySelectorAll("select option");
 items.forEach((element) => {
  if (element.innerHTML.toLowerCase().includes("reserved")) {
   element.disabled = true;
   console.log(`Disabled ${element.innerHTML} because it is reserved`);
  }
 });
}