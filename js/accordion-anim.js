document.querySelectorAll('.stat-accordion').forEach(details => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('.stat-content');
    if (!content) return;

    if (!details.open) {
        content.style.height = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'height 0.35s cubic-bezier(.4,0,.2,1)';
    }

    summary.addEventListener('click', e => {
        e.preventDefault(); 

        if (details.open) {
            content.style.height = content.scrollHeight + 'px';
            requestAnimationFrame(() => {
                content.style.height = '0';
            });
            details.open = false;
        } else {
            details.open = true;
            content.style.height = 'auto';
            const h = content.scrollHeight;
            content.style.height = '0';
            requestAnimationFrame(() => {
                content.style.transition = 'height 0.35s cubic-bezier(.4,0,.2,1)';
                content.style.height = h + 'px';
            });
            content.addEventListener('transitionend', function handler() {
                content.style.height = 'auto';
                content.removeEventListener('transitionend', handler);
            });
        }
    });
});