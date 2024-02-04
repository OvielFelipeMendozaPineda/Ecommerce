let preview = document.querySelector('.preview');
let purchaseButtons = document.querySelectorAll('.purchase');
let close = document.querySelector('.back')
let header = document.querySelector('header')
let carts = document.querySelectorAll('.bx-cart');
let carrito = document.querySelector('.carrito-compras')

purchaseButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        preview.classList.add('active');
        header.classList.add('active');
    });
});

close.addEventListener('click', function () {
    preview.classList.remove('active');
    header.classList.remove('active');
})

carts.forEach(function(cart) {
    cart.addEventListener('click', function() {
        carrito.classList.toggle('active');
        header.classList.toggle('active');
    });
});