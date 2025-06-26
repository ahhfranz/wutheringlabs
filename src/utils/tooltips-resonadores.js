export function inicializarTooltips() {
    document.querySelectorAll(
        '.resonadores-gelio, .resonadores-espectro, .resonadores-destrucción, .resonadores-fusion, .resonadores-aero, .resonadores-electro, .character-card-4, .character-card-5'
    ).forEach(card => {
        const tooltip = card.querySelector('.contenido-del-tooltip');
        let hideTimeout;

        if (!tooltip) return;

        function showTooltip() {
            clearTimeout(hideTimeout);
            document.querySelectorAll('.contenido-del-tooltip').forEach(t => {
                t.style.display = 'none';
            });

            document.body.appendChild(tooltip);
            tooltip.style.display = 'block';
            tooltip.style.position = 'absolute';
            tooltip.style.zIndex = 2147483647;

            const rect = card.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            const scrollX = window.scrollX || window.pageXOffset;

            let left = rect.left + rect.width / 2 + scrollX - tooltip.offsetWidth / 2;
            let top = rect.top + scrollY - tooltip.offsetHeight - 12;

            const padding = 8;
            const maxLeft = window.innerWidth - tooltip.offsetWidth - padding;
            if (left < padding) left = padding;
            if (left > maxLeft) left = maxLeft;

            const espacioArriba = rect.top - 12;
            if (espacioArriba >= tooltip.offsetHeight) {
                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
                tooltip.classList.remove('arrow-top');
                tooltip.classList.add('arrow-bottom');
            } else {
                top = rect.bottom + scrollY + 12;
                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
                tooltip.classList.remove('arrow-bottom');
                tooltip.classList.add('arrow-top');
            }
        }

        function hideTooltip() {
            hideTimeout = setTimeout(() => {
                tooltip.style.display = 'none';
            }, 10);
        }

        card.addEventListener('mouseenter', showTooltip);
        card.addEventListener('mouseleave', hideTooltip);
    });
}