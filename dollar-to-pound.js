if (window.location.pathname === '/portal') {
   window.addEventListener('load', () => {
      let el = document.querySelector('.mainconbox div form');
      if (el) {
         el.innerHTML = el.innerHTML.replaceAll('$', '£');
      }
   });
}
