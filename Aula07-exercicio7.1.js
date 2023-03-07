//Exercicio 7: Dado um numero qualquer, crie um código em Javascript que diga se ele é primo ou não.

const numero = 12;
let resposta = true;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) resposta = false;
}
console.log(`${numero} é um numero primo primo? ${resposta}`);