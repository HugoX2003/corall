document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica de autenticación
    // Puedes cambiar esto por tu lógica real de autenticación
    let authenticated = authenticateUser(id, password);

    if (authenticated) {
        // Usuario autenticado con éxito
        if (id === 'empleado') {
            alert('Empleado autenticado con éxito.');
            window.location.href = 'empleado/empleadoprincipal.html';
        } else if (id === 'gerente') {
            alert('Gerente autenticado con éxito.');
            window.location.href = 'gerente/gerenteprincipal.html';
        } else {
            alert('Usuario autenticado con éxito.');
        }
    } else {
        alert('Error de autenticación. Por favor, verifica tu ID y contraseña.');
    }
});

function authenticateUser(id, password) {
    // Aquí deberías implementar tu lógica real de autenticación
    // Por ahora, simplemente devolvemos true para propósitos de ejemplo
    return true;
}
