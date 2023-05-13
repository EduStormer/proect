function validarLargoNombre(nombres){
    if(nombres.length >=20 && nombres.length <=50){
        return true;
    }
    return false;
}

function validarLargoApellido(apellidos){
    if(apellidos.length >=20 && apellidos.length <=50){
        return true;
    }
    return false;
}

function validarEdad(edad){
    if(edad >= 18){
        return true;
    }
    return false;
}

function validarCorreoElectronico(correo) {
    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
}

function validarLargoPass(password){
    if(password.length >=7){
        return true;
    }
    return false;
}
