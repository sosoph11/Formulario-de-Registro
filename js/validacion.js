function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;

    // Validar que ningún campo esté vacío
}
    // Validar la longitud de la contraseña

    // Validar que las contraseñas coincidan
    if (password1 !== password2){
        showAlertError();
        return;
    }
    // Validar que se haya aceptado los términos y condiciones

    // Si todas las validaciones pasan, mostrar el éxito
