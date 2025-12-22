document.documentElement.classList.add('js-enabled');

const tabs = document.querySelectorAll('.main-nav button[role="tab"]');
const panels = document.querySelectorAll('.js-tab-panel');

panels.forEach(panel => {
    if (panel.getAttribute('aria-labelledby') === 'tab-meaning') {
        panel.setAttribute('aria-hidden', 'false');
    } else {
        panel.setAttribute('aria-hidden', 'true');
    }
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Deactivate all tabs
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        panels.forEach(p => p.setAttribute('aria-hidden', 'true'));

        // Activate clicked tab
        tab.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        panel.setAttribute('aria-hidden', 'false');
    });
});
