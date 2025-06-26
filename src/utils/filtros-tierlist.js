import { inicializarTooltips } from './tooltips-resonadores.js';

let activeModo = 'labs';
let activeFilters = { rareza: '*', elemento: '*', arma: '*' };
let searchTerm = '';

const tierOrder = ['S+', 'S', 'A+', 'A', 'B', 'C'];
const roleOrder = ['dps', 'hybrid', 'support'];

let originalCardsData = [];

function getRank(card, modo, role) {
    const rank = card.getAttribute(`data-${modo}-rank-${role}`) ||
        card.getAttribute(`data-${modo}-rank`);
    return rank ? rank.toUpperCase() : null;
}

function actualizarTierList() {

    document.querySelectorAll('.tierlist-row, .tier-row').forEach(row => {
        row.querySelectorAll('.tier-col').forEach(col => {
            Array.from(col.children).forEach(child => {
                if (
                    child.classList.contains('resonadores-gelio') ||
                    child.classList.contains('resonadores-espectro') ||
                    child.classList.contains('resonadores-fusion') ||
                    child.classList.contains('resonadores-destrucción') ||
                    child.classList.contains('resonadores-aero') ||
                    child.classList.contains('resonadores-electro')
                ) {
                    col.removeChild(child);
                }
            });
        });
    });

    originalCardsData.forEach(cardData => {
        const { attrs, html } = cardData;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const card = tempDiv.firstElementChild;

        const rareza = card.getAttribute('data-rarezas') || '';
        const elemento = card.getAttribute('data-elemento') || '';
        const arma = card.getAttribute('data-arma') || '';
        const nombreElem = card.querySelector('.resonadores-nombre');
        const nombre = nombreElem ? nombreElem.textContent.trim().toLowerCase() : '';

        const matchRareza = activeFilters.rareza === '*' || rareza === activeFilters.rareza;
        const matchElemento = activeFilters.elemento === '*' || elemento === activeFilters.elemento;
        const matchArma = activeFilters.arma === '*' || arma === activeFilters.arma;
        const matchNombre = !searchTerm || nombre.includes(searchTerm);

        if (!(matchRareza && matchElemento && matchArma && matchNombre)) {
            return;
        }

        const roles = (card.getAttribute('data-role') || 'dps').split(/[\s,]+/);
        let inserted = false;
        roles.forEach((role, idx) => {
            let colIndex = 0;
            if (role === 'hybrid') colIndex = 1;
            if (role === 'support') colIndex = 2;

            const rankForRole = getRank(card, activeModo, role);
            if (
                (card.hasAttribute(`data-${activeModo}-rank-${role}`) || (!inserted && idx === 0))
                && rankForRole
            ) {
                const tierForRole = tierOrder.includes(rankForRole) ? rankForRole : 'C';
                const rowForRole = document.querySelector(`.tierlist-row[data-tier="${tierForRole}"], .tier-row[data-tier="${tierForRole}"]`);
                const colsForRole = rowForRole ? rowForRole.querySelectorAll('.tier-col') : [];
                if (rowForRole && colsForRole[colIndex]) {
                    colsForRole[colIndex].appendChild(card.cloneNode(true));
                    inserted = true;
                }
            }
        });
    });

    document.querySelectorAll('.tierlist-row, .tier-row').forEach(row => {
        const hasVisible = Array.from(row.querySelectorAll('.tier-col')).some(col =>
            col.querySelector('.resonadores-gelio, .resonadores-espectro, .resonadores-aero, .resonadores-fusion, .resonadores-destrucción, .resonadores-electro')
        );
        row.style.display = hasVisible ? '' : 'none';
    });

    document.querySelectorAll('.tier-section').forEach(section => {
        const visibleRow = section.querySelector('.tierlist-row:not([style*="display: none"]), .tier-row:not([style*="display: none"])');
        section.style.display = visibleRow ? '' : 'none';
    });

    inicializarTooltips();
}

export function inicializarFiltrosTierlist() {
    originalCardsData = Array.from(document.querySelectorAll(
        '.resonadores-gelio, .resonadores-espectro, .resonadores-fusion, .resonadores-destrucción, .resonadores-aero, .resonadores-electro'
    )).map(card => ({
        attrs: card.attributes,
        html: card.outerHTML
    }));

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            this.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            if (this.title.includes('Rareza')) {
                activeFilters.rareza = this.title.includes('4') ? '4' : this.title.includes('5') ? '5' : '*';
            } else if (this.title === 'Todos') {
                if (this.parentElement.classList.contains('elements')) {
                    activeFilters.elemento = '*';
                } else if (this.parentElement.classList.contains('stars')) {
                    activeFilters.rareza = '*';
                } else if (this.parentElement.classList.contains('weapons')) {
                    activeFilters.arma = '*';
                }
            } else if (this.title.match(/Espectro|Aero|Destrucción|Fusion|Gelio|Electro/)) {
                activeFilters.elemento = this.title.toLowerCase();
            } else if (this.title.match(/Espada|Brazales|Pistolas|Mandoble|Rectificador/)) {
                activeFilters.arma = this.title.toLowerCase();
            }

            actualizarTierList();
        });
    });

    const searchInput = document.querySelector('.filter-search');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            searchTerm = this.value.trim().toLowerCase();
            actualizarTierList();
        });
    }

    const resetBtn = document.querySelector('.filter-reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            activeFilters = { rareza: '*', elemento: '*', arma: '*' };
            searchTerm = '';
            document.querySelectorAll('.filter-btn.active').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.filters-group').forEach(g => {
                const btnTodos = g.querySelector('.filter-btn[title="Todos"]');
                if (btnTodos) btnTodos.classList.add('active');
            });
            if (searchInput) searchInput.value = '';
            actualizarTierList();
        });
    }

    document.querySelectorAll('.menu-img-item').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.menu-img-item').forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');
            activeModo = this.getAttribute('data-tipo');
            actualizarTierList();
        });
    });

    const activo = document.querySelector('.menu-img-item.activo');
    if (activo) {
        activeModo = activo.getAttribute('data-tipo');
        actualizarTierList();
    }
}