document.querySelectorAll('.resonadores-gelio, .resonadores-espectro, .resonadores-havoc, .resonadores-fusion, .resonadores-aero, .resonadores-electro').forEach(card => {
  const tooltip = card.querySelector('.contenido-del-tooltip');
  let hideTimeout;

  function showTooltip() {
    clearTimeout(hideTimeout);
    document.querySelectorAll('.contenido-del-tooltip').forEach(t => {
      t.style.display = 'none';
      if (t.parentElement !== t.__originalParent && t.__originalParent) {
        t.__originalParent.appendChild(t);
      }
    });

    if (tooltip) {
      if (!tooltip.__originalParent) tooltip.__originalParent = card;
      document.body.appendChild(tooltip);
      tooltip.style.display = 'block';

      const rect = card.getBoundingClientRect();
      tooltip.style.position = 'fixed';
      tooltip.style.left = (rect.left + rect.width / 2) + 'px';
      tooltip.style.top = (rect.top - tooltip.offsetHeight - 12) + 'px';
      tooltip.style.transform = 'translate(-50%, 0)';
      tooltip.style.zIndex = 99999;
    }
  }

  function hideTooltip() {
    hideTimeout = setTimeout(() => {
      tooltip.style.display = 'none';
      if (tooltip.__originalParent) {
        tooltip.__originalParent.appendChild(tooltip);
      }
    }, 10);
  }

  function cancelHide() {
    clearTimeout(hideTimeout);
  }

  card.addEventListener('mouseenter', showTooltip);
  card.addEventListener('mouseleave', hideTooltip);

  if (tooltip) {
    tooltip.addEventListener('mouseenter', cancelHide);
    tooltip.addEventListener('mouseleave', hideTooltip);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const personajes = document.querySelectorAll(
    '.resonadores-gelio, .resonadores-espectro, .resonadores-aero, .resonadores-havoc, .resonadores-fusion, .resonadores-electro'
  );

  let activeFilters = {
    rareza: '*',
    elemento: '*',
    arma: '*'
  };
  let searchTerm = '';

  function handleFilterBtn(e) {
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
    } else if (this.title.match(/Espectro|Aero|Havoc|Fusion|Gelio|Electro/)) {
      activeFilters.elemento = this.title.toLowerCase();
    } else if (this.title.match(/Espada|Brazales|Pistola|Mandoble|Rectificador/)) {
      activeFilters.arma = this.title.toLowerCase();
    }

    filtrarPersonajes();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', handleFilterBtn);
  });

  const searchInput = document.querySelector('.filter-search');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchTerm = this.value.trim().toLowerCase();
      filtrarPersonajes();
    });
  }

  function filtrarPersonajes() {
    const personajes = document.querySelectorAll(
      '.resonadores-gelio, .resonadores-espectro, .resonadores-aero, .resonadores-havoc, .resonadores-fusion, .resonadores-electro'
    );
    console.log('Filtrando', personajes.length, activeFilters, searchTerm);
    personajes.forEach(pj => {
      const rareza = pj.getAttribute('data-rarezas') || '';
      const elemento = pj.getAttribute('data-elemento') || '';
      const arma = pj.getAttribute('data-arma') || '';
      const nombreElem = pj.querySelector('.resonadores-nombre');
      const nombre = nombreElem ? nombreElem.textContent.trim().toLowerCase() : '';
      console.log({ rareza, elemento, arma, nombre });

      const matchRareza = activeFilters.rareza === '*' || rareza === activeFilters.rareza;
      const matchElemento = activeFilters.elemento === '*' || elemento === activeFilters.elemento;
      const matchArma = activeFilters.arma === '*' || arma === activeFilters.arma;
      const matchNombre = !searchTerm || nombre.includes(searchTerm);

      if (matchRareza && matchElemento && matchArma && matchNombre) {
        pj.style.display = '';
      } else {
        pj.style.display = 'none';
      }
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
      filtrarPersonajes();
    });
  }
});

document.querySelectorAll('.menu-img-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.menu-img-item').forEach(i => i.classList.remove('activo'));
    this.classList.add('activo');
    const tipo = this.getAttribute('data-tipo');

    const order = ['S+', 'S', 'A+', 'A', 'B', 'C'];

    const allCards = Array.from(document.querySelectorAll(
      '.resonadores-gelio, .resonadores-espectro, .resonadores-fusion, .resonadores-havoc, .resonadores-aero, .resonadores-electro'
    ));

    order.forEach(tier => {
      document.querySelectorAll(`.tier-row[data-tier="${tier}"]`).forEach(row => {
        row.innerHTML = '';
      });
    });

    allCards.forEach(card => {
      const rank = (card.getAttribute(`data-${tipo}-rank`) || 'C').toUpperCase();
      const tier = order.includes(rank) ? rank : 'C';
      const row = document.querySelector(`.tier-row[data-tier="${tier}"]`);
      if (row) row.appendChild(card);
    });
  });
});