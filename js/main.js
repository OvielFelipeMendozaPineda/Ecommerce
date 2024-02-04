let preview = document.querySelector('.preview');
let purchaseButtons = document.querySelectorAll('.purchase');
let close = document.querySelector('.back')
let nav = document.querySelector('nav')

purchaseButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        preview.classList.add('active');
        nav.classList.add('active');
    });
});

close.addEventListener('click', function () {
    preview.classList.remove('active');
    nav.classList.remove('active');
})
