window.cipher = {
  encode(offset, string) {
    let resultado = '';
    let cypherValue = 0;
    // const palabra = '';
    for (let i = 0; i < string.length; i += 1) {
      const code = string.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        cypherValue = ((string.charCodeAt(i) - 65 + parseInt(offset, 10)) % 26) + 65;
        resultado += String.fromCharCode(cypherValue);
      } else if (code >= 97 && code <= 122) {
        cypherValue = ((string.charCodeAt(i) - 97 + parseInt(offset, 10)) % 26) + 97;
        resultado += String.fromCharCode(cypherValue);
      }
    }
    return resultado;
  },
  decode(offset, string) {
    let resultado1 = '';
    let cypherValuel = 0;

    for (let i = 0; i < string.length; i += 1) {
      const code = string.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        cypherValuel = ((string.charCodeAt(i) - 65 - parseInt(offset, 10) + 26) % 26) + 65;
        resultado1 += String.fromCharCode(cypherValuel);
      } else if (code >= 97 && code <= 122) {
        cypherValuel = ((string.charCodeAt(i) - 97 - parseInt(offset, 10) + 26) % 26) + 97;
        resultado1 += String.fromCharCode(cypherValuel);
      }
    }
    return resultado1;
  },
};
