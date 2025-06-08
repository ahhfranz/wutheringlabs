const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
  document.body.classList.toggle('sidebar-close');
  closeAllSubMenus();
}

toggleButton.onclick = toggleSidebar;

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenus();
  }
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show');
    if (ul.previousElementSibling) {
      ul.previousElementSibling.classList.remove('rotate');
    }
  });
}

function ajustarSidebar() {
  sidebar.classList.remove('close');
  toggleButton.classList.remove('rotate');
  document.body.classList.remove('sidebar-close');
}

window.addEventListener('DOMContentLoaded', ajustarSidebar);
window.addEventListener('resize', ajustarSidebar);

let scrollTimeout;
window.addEventListener('wheel', function () {
  document.body.classList.add('is-scrolling');
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('is-scrolling');
  }, 200);
});

window.onscroll = function () {
  const btn = document.getElementById("btn-ir-arriba");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Al hacer clic, vuelve arriba
document.getElementById("btn-ir-arriba").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};