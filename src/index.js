let btnResultado = document.getElementById("resultado");

btnResultado.addEventListener("click", function () {
    let inputMensaje = document.getElementById("writeText"); //obtengo el objeto input
    let inputDesplazamiento = document.getElementById("key"); //obtengo el objeto input

    let mensaje = inputMensaje.value; //texto/value del input
    let desplazamiento = inputDesplazamiento.value;
    let resultado = window.cipher.encode(desplazamiento, mensaje);
    //invocar


    /*let desplazamiento = inputDesplazamiento.value; //texto/value del input
      let resultado = "";
    
      for (i = 0; i < mensaje.length; i++) {
        //para letras mayúsculas
        let cypherValue =
          ((mensaje.charCodeAt(i) - 65 + parseInt(desplazamiento)) % 26) + 65; //ENCRIPTAR
        resultado = resultado + String.fromCharCode(cypherValue);
      }*/

    let labelCypherValue = document.getElementById("cypherValue"); //label cypherValue
    labelCypherValue.innerText = resultado;
});

//buton descrifrado

let btnDescifrar = document.getElementById("descifrar");

btnDescifrar.addEventListener("click", function () {
    let labelCypherValue = document.getElementById("cypherValue").innerText;
    let inputsecretKey = document.getElementById("secretKey").value;


    //decode 
    let res = window.cipher.decode(inputsecretKey, labelCypherValue);
    /*let cifrado = labelCypherValue.innerText;
    let desp = inputsecretKey.value;
    let res = "";
    let original = "";
  
    for (i = 0; i < cifrado.length; i++) {
      original = ((cifrado.charCodeAt(i) - 65 - parseInt(desp) + 26) % 26) + 65;
      res = res + String.fromCharCode(original);
    } */

    let labelOriginal = document.getElementById("original");
    labelOriginal.innerText = res;
});
