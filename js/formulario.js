// Agregar un evento al enviar el formulario
document.getElementById('pet-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para pruebas

    // Aquí puedes manejar la lógica del formulario, como validaciones o envío a un servidor

    alert('Formulario enviado correctamente');
});
