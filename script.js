const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const cncl = document.getElementsByClassName("cross")[0]; // get the first (and only) close icon

menuIcon.addEventListener('click', () => {
    navList.classList.add('active');
    navList.classList.remove('inactive');
});

cncl.addEventListener('click', () => {
    navList.classList.remove('active');
    navList.classList.add('inactive');
});
