const CURRENTPATHNAME = window.location.pathname;
const GATHERINGOFUNITY = CURRENTPATHNAME.includes('5689686') || CURRENTPATHNAME.includes('5689710') || CURRENTPATHNAME.includes('5689724') || CURRENTPATHNAME.includes('5689778') || CURRENTPATHNAME.includes('5692000');

if (GATHERINGOFUNITY) {
 // ADD LINK TO STYLE TO HEAD
 const LINK = document.createElement('link');
 LINK.rel = 'stylesheet';
 LINK.href = 'https://chabad.netlify.app/friendshipct.css';
 document.head.appendChild(LINK);
}