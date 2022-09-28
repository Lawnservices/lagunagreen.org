const saluda = document.getElementById('header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 80) {
        header.style.backgroundColor = '#154'
    } else {
        header.style.backgroundColor = 'tomato'
    }
});