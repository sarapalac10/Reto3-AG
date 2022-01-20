var imcDatos = [];

function agregarImcDatos(imcSexo, imcEdad, imcPeso, imcAltura, imcImc, imcClasif) {
    
    var NuevoRegistro = {
        sexo: imcSexo,
        edad: imcEdad,
        peso: imcPeso,
        altura: imcAltura,
        imc: imcImc,
        clasificacion : imcClasif,
    };

    // console.log(NuevoRegistro); 
    imcDatos.push(NuevoRegistro);
}

function obtenerListaImc() {
    return imcDatos;
}