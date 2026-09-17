function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');

    const spans = document.querySelectorAll('.burger span');
    const isOpen = menu.classList.contains('open');

    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
}

// закриття меню при кліку поза хедером
document.addEventListener('click', function(e) {
    const header = document.querySelector('header');
    if (!header.contains(e.target)) {
        const menu = document.getElementById('mobileMenu');
        menu.classList.remove('open');

        const spans = document.querySelectorAll('.burger span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const about = document.querySelector('.about');
    const aboutHeight = about.offsetHeight;

    if (window.scrollY > aboutHeight) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.zIndex = '1000';
        header.style.background = '#030509';
    } else {
        header.style.position = 'static';
        header.style.background = 'transparent';
    }
    console.log('Scroll position:', window.scrollY, 'About height:', aboutHeight);
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about, .illustration, .use_case, .especials_card');
    const menuButtons = document.querySelectorAll('.buttons [data-section], .mobile_menu_buttons [data-section]');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                current = section.getAttribute('id');
            }
        });

        console.log('current:', current, 'sections found:', sections.length, 'buttons found:', menuButtons.length);

        menuButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-section') === current) {
                btn.classList.add('active');
            }
        });
    });
});

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}