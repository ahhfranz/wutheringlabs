export function inicializarAccordion() {
    document.querySelectorAll('.stat-accordion').forEach(details => {
        const summary = details.querySelector('summary');
        const content = details.querySelector('.stat-content');
        if (!content) return;

        content.style.height = details.open ? 'auto' : '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'height 0.35s cubic-bezier(.4,0,.2,1)';

        summary.addEventListener('click', e => {
            setTimeout(() => {
                if (details.open) {
                    content.style.height = content.scrollHeight + 'px';
                    content.addEventListener('transitionend', function handler() {
                        content.style.height = 'auto';
                        content.removeEventListener('transitionend', handler);
                    });
                } else {
                    content.style.height = content.scrollHeight + 'px';
                    requestAnimationFrame(() => {
                        content.style.height = '0';
                    });
                }
            }, 0);
        });
    });
}