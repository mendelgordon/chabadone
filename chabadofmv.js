window.onload = () => {
   if (Co.ArticleId === '4970020') {
      document.querySelector('#js-donate-form > div.content-box.full-row.intro-wrapper > div > p').style.fontSize = 'large';
      const text1 = `<div class="row"><div class="col flex-1"><div class="field-wrapper js-field-wrapper no-value checkbox-wrapper"><label for="dedication"><input type="checkbox" value="0" name="dedication" id="dedication">Yes! I want to make a donation in memory of someone special or to honor someone for a special occasion or for something special they did.</label></div></div></div>`;
      const text3 = `<p id="information">A notification of the donation, including in whose honor/memory it was made (not the amount), will be sent to the family in whose honor/memory the donation has been made, and will appear in our email newsletter.</p>`;
      const text4 = `<ol id="questions"><li>How would you like your name/family to appear in the dedication?</li><li>Where should the notification be sent: (Include address/es if needed)</li><li>Would you like your donation to remain anonymous?</li></ol>`;
      document.querySelector('#js-donate-form > div:nth-child(4) > div.row.new-row').style.display = 'none';
      document.querySelector('#js-donate-form > div:nth-child(4) > div:nth-child(3)').insertAdjacentHTML('afterend', text1);
      document.querySelector('#dedication').addEventListener('change', () => {
         if (document.querySelector('#dedication').checked) {
            document.querySelector('#js-donate-form > div:nth-child(4) > div:nth-child(4)').insertAdjacentHTML('afterend', text4);
            document.querySelector('#js-donate-form > div:nth-child(4) > div:nth-child(4)').insertAdjacentHTML('afterend', text3);
            document.querySelector('#js-donate-form > div:nth-child(4) > div.row.new-row').style.display = 'block';
         } else {
            document.querySelector('#information').remove();
            document.querySelector('#questions').remove();
            document.querySelector('#js-donate-form > div:nth-child(4) > div.row.new-row').style.display = 'none';
         }
      });
   }
};
