const toggleButton = document.getElementById('navbar-toggle');
const navList = document.getElementById('navbar-list');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('active');
});
