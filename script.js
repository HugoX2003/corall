//mensaje de autentificación de usuario

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    // Aquí puedes validar el ID y la contraseña contra una base de datos o algún otro sistema de autenticación
    alert('Usuario autenticado con éxito. ID: ' + id + ', Contraseña: ' + password);
});

