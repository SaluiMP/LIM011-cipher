window.cipher = {
  encode: function (offset, string) {

    //ENCRIPTADO
    let resultado = "";

    for (let i = 0; i < string.length; i++) {

      let cypherValue =
        ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65; //ENCRIPTAR
      resultado = resultado + String.fromCharCode(cypherValue);

    }

    return resultado;
  },


  decode: function (offset, string) {

    //DESENCRIPTADO
    let res = "";

    for (let i = 0; i < string.length; i++) {
      let original = ((string.charCodeAt(i) - 65 - parseInt(offset) + 26) % 26) + 65;
      res = res + String.fromCharCode(original);
    }

    return res;
  }

}

