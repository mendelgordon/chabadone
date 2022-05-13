window.onload = () => {
   try {
      document.querySelector('.mainconbox div form').innerHTML = document.querySelector('.mainconbox div form').innerHTML.replaceAll('$', '£');
   } catch (e) {
      console.log(e);
   }
};
