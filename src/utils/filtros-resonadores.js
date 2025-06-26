export function inicializarFiltrosResonadores() {
    const searchInput = document.querySelector('.filter-search');
    const resetBtn = document.querySelector('.filter-reset-btn');
    const cards = document.querySelectorAll('.characters-grid [class^="character-card"]');

    let filtro = {
        rareza: 'todos',
        elemento: 'todos',
        arma: 'todos',
        busqueda: ''
    };

    document.querySelectorAll('.filters-group.stars .filter-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            filtro.rareza = i === 0 ? 'todos' : (i === 1 ? '4' : '5');
            setActive(btn, '.filters-group.stars .filter-btn');
            filtrar();
        });
    });

    document.querySelectorAll('.filters-group.elements .filter-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            filtro.elemento = i === 0 ? 'todos' : btn.title.toLowerCase();
            setActive(btn, '.filters-group.elements .filter-btn');
            filtrar();
        });
    });

    document.querySelectorAll('.filters-group.weapons .filter-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            filtro.arma = i === 0 ? 'todos' : btn.title.toLowerCase();
            setActive(btn, '.filters-group.weapons .filter-btn');
            filtrar();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filtro.busqueda = searchInput.value.toLowerCase();
            filtrar();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            filtro = { rareza: 'todos', elemento: 'todos', arma: 'todos', busqueda: '' };
            document.querySelectorAll('.filters-group .filter-btn').forEach((btn, i) => {
                if (btn.innerHTML.includes('bi-asterisk')) btn.classList.add('active');
                else btn.classList.remove('active');
            });
            if (searchInput) searchInput.value = '';
            filtrar();
        });
    }

    function setActive(btn, selector) {
        document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    function filtrar() {
        document.querySelectorAll('.characters-grid > a, .characters-grid > router-link').forEach(link => {
            const card = link.querySelector('[class^="character-card"]');
            if (!card) return;
            const nombre = card.querySelector('.character-name').textContent.toLowerCase();
            const rareza = card.classList.contains('character-card-5') ? '5' : '4';
            const elemento = card.getAttribute('data-elemento');
            const arma = card.getAttribute('data-arma');
            let visible = true;

            if (filtro.rareza !== 'todos' && filtro.rareza !== rareza) visible = false;
            if (filtro.elemento !== 'todos' && filtro.elemento !== elemento) visible = false;
            if (filtro.arma !== 'todos' && filtro.arma !== arma) visible = false;
            if (filtro.busqueda && !nombre.includes(filtro.busqueda)) visible = false;

            link.style.display = visible ? '' : 'none';
        });
    }
}