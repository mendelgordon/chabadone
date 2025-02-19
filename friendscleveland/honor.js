const elements = {
    donateButton: document.querySelector('.donate-button'),
    backButton: document.querySelector('.back-button a'),
    mainContent: document.querySelector('.main-content'),
    sidebarForm: document.querySelector('.sidebar-form'),
    backToSite: document.querySelector('.cco_templateless_template'),
};

if (elements.backToSite) {
    elements.backToSite.remove();
}

if (elements.donateButton) {
    elements.donateButton.addEventListener('click', () => toggleView(true));
}
if (elements.backButton) {
    elements.backButton.addEventListener('click', () => toggleView(false));
}

function toggleView(donateMode) {
    elements.mainContent?.classList.toggle('hidden', donateMode);
    elements.sidebarForm?.classList.toggle('visible', donateMode);
    elements.donateButton?.parentElement?.classList.toggle('hidden', donateMode);
    elements.backButton?.parentElement?.classList.toggle('visible', donateMode);
}