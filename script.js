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