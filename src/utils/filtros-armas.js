export function inicializarFiltrosArmas() {
    const searchInput = document.querySelector('.filter-search');
    const resetBtn = document.querySelector('.filter-reset-btn');
    const cards = document.querySelectorAll('.armas-grid > .arma-card');

    let filtro = {
        rareza: 'todos',
        arma: 'todos',
        busqueda: ''
    };

    document.querySelectorAll('.filters-group.stars .filter-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (i === 0) filtro.rareza = 'todos';
            else filtro.rareza = btn.textContent.replace('★', '').trim();
            setActive(btn, '.filters-group.stars .filter-btn');
            filtrar();
        });
    });

    document.querySelectorAll('.filters-group.weapons .filter-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (i === 0) filtro.arma = 'todos';
            else filtro.arma = btn.title.toLowerCase();
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
            filtro = { rareza: 'todos', arma: 'todos', busqueda: '' };
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
        cards.forEach(card => {

            const rareza = card.classList.contains('rare-5') ? '5' :
                card.classList.contains('rare-4') ? '4' :
                    card.classList.contains('rare-3') ? '3' :
                        card.classList.contains('rare-2') ? '2' :
                            card.classList.contains('rare-1') ? '1' : '';

            const armaTipoImg = card.querySelector('.arma-tipo img');
            const arma = armaTipoImg ? armaTipoImg.alt.toLowerCase() : '';

            const nombre = card.querySelector('.arma-nombre').textContent.toLowerCase();

            let visible = true;
            if (filtro.rareza !== 'todos' && filtro.rareza !== rareza) visible = false;
            if (filtro.arma !== 'todos' && filtro.arma !== arma) visible = false;
            if (filtro.busqueda && !nombre.includes(filtro.busqueda)) visible = false;

            card.style.display = visible ? '' : 'none';
        });
    }
}