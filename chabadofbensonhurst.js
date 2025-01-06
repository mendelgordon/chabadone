const matcherIntoHtml = `
<h3 class="fs-matchers-intro text-center js-viewport-in a-delay-100ms" data-effect="fadeIn" data-effect-offset="0">
<span><strong>Every $ = 2</strong></span>
<span>Double your impact thanks to our generous matchers!</span>
</h3>`;

const matcherInfoSelector = '.fs-matchers-intro';

const matcherInfo = document.querySelector(matcherInfoSelector);
if (matcherInfo) matcherInfo.outerHTML = matcherIntoHtml;