let codeRun = false;
if (Co.ArticleId === '5468598' && !codeRun) {
   // when #inputRecurring is added to the dom, select it, unless it's already selected
   const select = (item = document.querySelector('#inputRecurring')) => (item.selected ? (item.selected = true) : item.click());
   // check if inputRecurring is in the dom every second
   setInterval(() => document.querySelector('#inputRecurring') && select(), 1000);
   codeRun = true;
   console.log('HarfordChabad.js loaded');
}
