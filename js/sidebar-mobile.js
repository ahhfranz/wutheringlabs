document.addEventListener('DOMContentLoaded', function () {
    function createMobileNav() {
        if (window.innerWidth > 800) return;

        if (document.querySelector('.mobile-bottom-nav')) return;

        const nav = document.createElement('nav');
        nav.className = 'mobile-bottom-nav';
        nav.innerHTML = `
      <a href="../index.html" class="nav-btn"><img src="../images/categorias/inicio.png" alt="Inicio"></a>
      <a href="../pages/tierlist.html" class="nav-btn"><img src="../images/categorias/tierlist.png" alt="Tier List"></a>
      <a href="../pages/resonadores.html" class="nav-btn"><img src="../images/categorias/resonadores.png" alt="Resonadores"></a>
      <a href="#" class="nav-btn"><img src="../images/categorias/armas.png" alt="Armas"></a>
      <a href="https://forms.gle/2kPYNky9kRuUnLqQ7" target="_blank" class="nav-btn"><img src="../images/categorias/feedback.png" alt="Feedback"></a>
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