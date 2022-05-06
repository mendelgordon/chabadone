window.addEventListener('DOMContentLoaded', () => {
   if (Co.ArticleId == '5512769') {
      let items = document.querySelectorAll('#cid_3 label span');
      items.forEach(element => {
         if (element.innerHTML.includes('-')) {
            element.innerHTML.split('-');
            element.innerHTML = '<strong>' + element.innerHTML.replace('-', '</strong> - ');
         }
         let spanText = element.innerText.toLowerCase();
         if (spanText.includes('reserved') || spanText.includes('dedicated')) {
            element.closest('.form-checkbox-item').classList.add('reserved-dedication');
         }
      });
      document.querySelector('#Head1').insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://chabad.netlify.app/chabadwaterways.css" />');
   }
   if (Co.ArticleId == '5512724' || Co.ArticleId == '5512752') {
      document.querySelector('#Head1').insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://chabad.netlify.app/chabadwaterways.css" />');
   }
});
