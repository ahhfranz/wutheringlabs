document.addEventListener('DOMContentLoaded', function () {
    function getPathPrefix() {
        const path = window.location.pathname;
        if (path.endsWith('/index.html') || path === '/' || path.endsWith('\\index.html')) return '';
        if (path.includes('/pages/') || path.includes('\\pages\\')) return '../';
        return '';
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
            <a href="${prefix}pages/armas.html" class="nav-btn"><img src="${prefix}images/categorias/armas.png" alt="Armas"></a>
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