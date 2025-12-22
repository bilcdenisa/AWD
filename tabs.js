const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
        });
        tab.setAttribute('aria-selected', 'true');

        panels.forEach(panel => {
            panel.hidden = true;
        });

        const activePanel = document.getElementById(
            tab.getAttribute('aria-controls')
        );
        activePanel.hidden = false;
    });
});
