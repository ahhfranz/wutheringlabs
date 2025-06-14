function inicializarTooltips() {
    document.querySelectorAll(
        '.resonadores-gelio, .resonadores-espectro, .resonadores-havoc, .resonadores-fusion, .resonadores-aero, .resonadores-electro, .character-card-4, .character-card-5'
    ).forEach(card => {
        const tooltip = card.querySelector('.contenido-del-tooltip');
        let hideTimeout;

        if (!tooltip) return;

        function showTooltip() {
            clearTimeout(hideTimeout);
            document.querySelectorAll('.contenido-del-tooltip').forEach(t => {
                t.style.display = 'none';
            });

            // Mover tooltip al body
            document.body.appendChild(tooltip);
            tooltip.style.display = 'block';
            tooltip.style.position = 'absolute';
            tooltip.style.zIndex = 2147483647;

            // Calcular posición
            const rect = card.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            const scrollX = window.scrollX || window.pageXOffset;
            tooltip.style.left = (rect.left + rect.width / 2 + scrollX - tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.top + scrollY - tooltip.offsetHeight - 12) + 'px';

            // Ajuste si se sale de la pantalla
            const tooltipRect = tooltip.getBoundingClientRect();
            if (tooltipRect.left < 0) {
                tooltip.style.left = (scrollX + 8) + 'px';
            }
            if (tooltipRect.right > window.innerWidth) {
                tooltip.style.left = (scrollX + window.innerWidth - tooltip.offsetWidth - 8) + 'px';
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

document.addEventListener('DOMContentLoaded', inicializarTooltips);