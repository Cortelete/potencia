const base = 2;
const expoente = 5;

function calcular(base, expoente) {
  let resultado = 1;
  if (expoente === 0) {
    return 1;
  }
  for (let i = 0; i < expoente; i++) {
    resultado *= base;
  }
  return resultado;
}

const resultado = calcular(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);