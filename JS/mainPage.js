function openSidebar() {
    console.log('sidebar');
    document.querySelector('.sidebar').classList.add('open');
}

function closeSidebar() {
    console.log('sidebar');
    document.querySelector('.sidebar').classList.remove('open');
}

function openDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    var svgIcon = document.querySelector('.arrow-svg');
    var isOpen = dropdownContent.classList.contains('open');

    if (isOpen) {
        dropdownContent.classList.remove('open');
        svgIcon.classList.remove('open');
    } else {
        dropdownContent.classList.add('open');
        svgIcon.classList.add('open');
    }
}

function _scrollTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function (e) {
    const arrow = document.querySelector('.arrow-up');
    if (window.scrollY > 100) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
});