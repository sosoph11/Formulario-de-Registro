function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function(event) {
     event.preventDefault();
    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;


// Validar que ningún campo esté vacío
if (!nombre || !apellido || !email || !password1 || !password2) {
    showAlertError();
    return;
}
    // Validar la longitud de la contraseña
 if (password1.length < 6) {
        showAlertError();
        return;
    }
    // Validar que las contraseñas coincidan
    if (password1 !== password2){
        showAlertError();
        return;
    }
    // Validar que se haya aceptado los términos y condiciones
     if (!terminos) {
        showAlertError();
        return;
    }
    // Si todas las validaciones pasan, mostrar el éxito
    showAlertSuccess();
    });
