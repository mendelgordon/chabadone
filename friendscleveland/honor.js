const elements = {
    donateButtonWrapper: document.querySelector('.donate-button-wrapper'),
    donateButton: document.querySelector('.donate-button'),
    backButton: document.querySelector('.back-button a'),
    mainContent: document.querySelector('.main-content'),
    sidebarForm: document.querySelector('.sidebar-form')
};

if (elements.donateButton) {
    elements.donateButton.addEventListener('click', () => toggleView(true));
}
if (elements.backButton) {
    elements.backButton.addEventListener('click', () => toggleView(false));
}

function toggleView(donateMode) {
    elements.mainContent?.classList.toggle('hidden', donateMode);
    elements.sidebarForm?.classList.toggle('visible', donateMode);
    elements.donateButtonWrapper?.classList.toggle('hidden', donateMode);
    elements.backButton?.classList.toggle('visible', donateMode);
}