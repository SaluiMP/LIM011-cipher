window.cipher = {
  encode(offset, string) {
    let resultado = '';
    let cypherValue = 0;

    for (let i = 0; i < string.length; i += 1) {
      cypherValue = ((string.charCodeAt(i) - 65 + parseInt(offset, 10)) % 26) + 65;
      resultado += String.fromCharCode(cypherValue);
    }

    return resultado;
  },
  decode(offset, string) {
    let res = '';
    let original = 0;

    for (let i = 0; i < string.length; i += 1) {
      original = ((string.charCodeAt(i) - 65 - parseInt(offset, 10) + 26) % 26) + 65;
      res += String.fromCharCode(original);
    }

    return res;
  },
};
