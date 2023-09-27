// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menu.classList.toggle('closed');
});

// Abrir Formulário
const botao = document.getElementById('botao');
const formulario = document.getElementById('formulario');

botao.addEventListener('click', () => {
    formulario.style.display = 'flex';
});