function validarAcceso(){
    const USUARIO_CORRECTO = "JuanIsaza.net";
    const CONTRASEÑA_CORRECTA = "1020";
    const MAX_INTENTOS = 3;

    let intentos = 0;
    let ingresoValido = false;

while(!ingresoValido && intentos < MAX_INTENTOS){
    
    let usuarioIngresado = prompt("Ingrese su usuario por favor")
    let contraseñaIngresada = prompt("Ingrese su contraseña")

    if(usuarioIngresado === USUARIO_CORRECTO && contraseñaIngresada === CONTRASEÑA_CORRECTA){
        console.log(`¡Bienvenido al sistema!`);
        ingresoValido = true;
    }else{
            intentos++;
            console.log(`Datos incorrectos. Intento ${intentos} de ${MAX_INTENTOS}.`);
    }
    
}
if (!ingresoValido) {
    console.log("Usuario bloqueado. Ha superado el número de intentos.");
    }
}
validarAcceso();