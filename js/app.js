const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

function ajustarSidebar() {
  sidebar.classList.remove('close');
  toggleButton.classList.remove('rotate');
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
