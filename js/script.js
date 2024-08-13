// Función para cerrar el pop-up
function closePopup() {
    const popup = document.getElementById('welcome-popup');
    popup.style.display = 'none';
}

// Mostrar el pop-up al cargar la página
window.onload = function() {
    const popup = document.getElementById('welcome-popup');
    popup.style.display = 'flex';
};
