document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const dato = urlParams.get('dato');

    // Mostrar el valor en algún lugar de tu página de agradecimiento

    document.querySelector('.email').innerText = dato; // Reemplaza 'mostrarDato' con el ID de donde quieres mostrar el dato
});

const buttonDismiss = document.querySelector('.thanks__button');


buttonDismiss.addEventListener('click', () => {
    window.location.href = '/index.html'
})