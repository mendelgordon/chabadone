let codeRun = false;
if (Co.ArticleId === '5468598' && !codeRun) {
   // when #inputRecurring is added to the dom, select it, unless it's already selected
   const inputRecurring = document.querySelector('#inputRecurring');
   const select = item => (item.selected ? item : item.click());
   // check if inputRecurring is in the dom every second
   setInterval(() => inputRecurring && select(inputRecurring), 1000);
   codeRun = true;
   console.log('HarfordChabad.js loaded');
}
