// this script will be loaded twice, so we need to check if the element already exists
// @ts-ignore
if (typeof matcherIntroHtml === 'undefined') {
    var matcherIntroHtml = `<h3 class="fs-matchers-intro text-center js-viewport-in a-delay-100ms" data-effect="fadeIn" data-effect-offset="0"><span><strong>Every $ = 2</strong></span><span>Double your impact, thanks to our generous matchers!</span></h3>`;
    var matcherIntro = document.querySelector('.fs-matchers-intro');
    if (matcherIntro) {
        matcherIntro.outerHTML = matcherIntroHtml;
    }
}