//Cálculo de IMC

var btnCalculo = document.querySelector('#boton-enviar');

function crearRegistro() {
    
    //Registro de los campos del formulario
    
    var sexoFormulario = document.querySelector('input[name="sexo"]:checked').value;
    var edadFormulario = document.querySelector('#user-age').value ;
    var pesoFormulario = document.querySelector('#user-weight').value;
    var alturaFormulario = document.querySelector('#user-height').value;
    var calculo_imc = (pesoFormulario/(alturaFormulario*alturaFormulario));
    var resultado1 ;
    var resultadoF ; 
     

    agregarImcDatos(sexoFormulario, edadFormulario, pesoFormulario, alturaFormulario, roundToTwo(calculo_imc), clasificar(resultado1) );
    imprimirTabla();

    function roundToTwo(calculo_imc) {
    return +(Math.round(calculo_imc + "e+2")  + "e-2");
    }

    function clasificar(resultado1) {
      resultado1 = roundToTwo(calculo_imc)
      if (resultado1 < 18.50)
              { resultadoF = "Por debajo del peso"; }
              else if (resultado1 >= 18.50 && resultado1 < 24.9)
              { resultadoF = "Peso saludable."; }
              else if (resultado1 >= 25 && resultado1 < 29.9)
              {resultadoF = "Sobrepeso";}
              else if (resultado1 >= 30 && resultado1 < 39.9)
              {resultadoF = "Obesidad";}
              else
              { resultadoF = "Obesidad extrema o de alto riesgo.";}  

              return resultadoF;
    }

    //Crear al objeto
  objRegistrado = new Registro(sexoFormulario, edadFormulario, pesoFormulario, alturaFormulario, roundToTwo(calculo_imc), clasificar(resultado1));

  //Guardar en localStorage (Convertir a un formato Json, castear el objeto) El objeto se llama "registros"
  localStorage.setItem("registros",JSON.stringify(objRegistrado))

  //Obtener lo creado. Se debe convertir
  var objRegistradoRecibido = JSON.parse(localStorage.getItem("registros"));
  // console.log(objRegistradoRecibido);
  console.log("El registro es: " + objRegistradoRecibido.Sexo + " " + objRegistradoRecibido.Edad + " " + objRegistradoRecibido.Peso + " " + objRegistradoRecibido.Altura) ;
} 
     
      
    function imprimirTabla () {
      var lista = obtenerListaImc() ,
      tbody = document.querySelector('#tablaResultados tbody');
      
      tbody.innerHTML = '';

      var pesoFormulario = document.querySelector('#user-weight').value;
      var alturaFormulario = document.querySelector('#user-height').value;
      var calculo_imc = (pesoFormulario/(alturaFormulario*alturaFormulario));
      var resultado1 ;
      var resultadoF ;   

      function roundToTwo(calculo_imc) {
        return +(Math.round(calculo_imc + "e+2")  + "e-2");
        }
    
        function clasificar(resultado1) {
          resultado1 = roundToTwo(calculo_imc)
          if (resultado1 < 18.50)
                  { resultadoF = "Por debajo del peso"; }
                  else if (resultado1 >= 18.50 && resultado1 < 24.9)
                  { resultadoF = "Peso saludable."; }
                  else if (resultado1 >= 25 && resultado1 < 29.9)
                  {resultadoF = "Sobrepeso";}
                  else if (resultado1 >= 30 && resultado1 < 39.9)
                  {resultadoF = "Obesidad";}
                  else
                  { resultadoF = "Obesidad extrema o de alto riesgo.";}  
    
                  return resultadoF;
        }
      
      for (var i = 0; i < lista.length; i++) {
          var row = tbody.insertRow(i),
              sexoCelda = row.insertCell(0),
              edadCelda = row.insertCell(1);
              pesoCelda = row.insertCell(2);
              alturaCelda = row.insertCell(3);
              imcCelda = row.insertCell(4);
              clasifCelda = row.insertCell(5);

          
          sexoCelda.innerHTML = lista[i].sexo;
          edadCelda.innerHTML = lista[i].edad;
          pesoCelda.innerHTML = lista[i].peso;
          alturaCelda.innerHTML = lista[i].altura;
          imcCelda.innerHTML = roundToTwo(calculo_imc);
          clasifCelda.innerHTML = clasificar(resultado1);
  
          tbody.appendChild(row);
      }
     
  
    }

//Creación de función para el registro

function Registro(rsexo, redad, rpeso, raltura, rimc, rclasificacion){
  this.Sexo = rsexo;
  this.Edad = redad;
  this.Peso = rpeso;
  this.Altura = raltura;
  this.IMC = rimc; 
  this.Clasificacion = rclasificacion;
}

