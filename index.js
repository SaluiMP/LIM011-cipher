const btnResultado = document.getElementById('resultado');

btnResultado.addEventListener('click', () => {
  const inputMensaje = document.getElementById('writeText');
  const inputDesplazamiento = document.getElementById('key');
  const mensaje = inputMensaje.value;
  const desplazamiento = inputDesplazamiento.value;
  const resultado = window.cipher.encode(desplazamiento, mensaje);
  const labelCypherValue = document.getElementById('cypherValue');
  labelCypherValue.innerText = resultado;
});

const btnDescifrar = document.getElementById('descifrar');

btnDescifrar.addEventListener('click', () => {
  const labelCypherValue = document.getElementById('cypherValue').innerText;
  const inputsecretKey = document.getElementById('secretKey').value;
  const res = window.cipher.decode(inputsecretKey, labelCypherValue);
  document.getElementById('original').innerHTML = res;
});
