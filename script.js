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


// loader


window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.transition = 'opacity 0.8s ease';
    preloader.style.opacity = '0';

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 800);
});




const sections = document.querySelectorAll('.about_container, .skill-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Animate once
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});
