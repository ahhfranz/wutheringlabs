document.addEventListener('DOMContentLoaded', function () {
    function getPathPrefix() {
        // Si estamos en la raíz (index.html), no usamos ../
        // Si estamos en una subcarpeta (como /pages/), usamos ../
        const path = window.location.pathname;
        // Ajusta esto si tu estructura cambia
        return path.endsWith('/index.html') || path === '/' ? '' : '../';
    }

    function createMobileNav() {
        if (window.innerWidth > 800) return;

        if (document.querySelector('.mobile-bottom-nav')) return;

        const prefix = getPathPrefix();

        const nav = document.createElement('nav');
        nav.className = 'mobile-bottom-nav';
        nav.innerHTML = `
      <a href="${prefix}index.html" class="nav-btn"><img src="${prefix}images/categorias/inicio.png" alt="Inicio"></a>
      <a href="${prefix}pages/tierlist.html" class="nav-btn"><img src="${prefix}images/categorias/tierlist.png" alt="Tier List"></a>
      <a href="${prefix}pages/resonadores.html" class="nav-btn"><img src="${prefix}images/categorias/resonadores.png" alt="Resonadores"></a>
      <a href="#" class="nav-btn"><img src="${prefix}images/categorias/armas.png" alt="Armas"></a>
      <a href="https://forms.gle/2kPYNky9kRuUnLqQ7" target="_blank" class="nav-btn"><img src="${prefix}images/categorias/feedback.png" alt="Feedback"></a>
    `;
        document.body.appendChild(nav);
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.style.display = 'none';
    }

    createMobileNav();

    window.addEventListener('resize', function () {
        const nav = document.querySelector('.mobile-bottom-nav');
        if (window.innerWidth <= 800) {
            if (!nav) createMobileNav();
        } else {
            if (nav) nav.remove();
            const sidebar = document.getElementById('sidebar');
            if (sidebar) sidebar.style.display = '';
        }
    });
});