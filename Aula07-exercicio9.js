const num = 9;

let soma = 0;
let anterior = 0;
let proximo = 1;

for (let i = 0; i < num; i++) {
  soma = anterior + proximo;
  anterior = proximo;
  proximo = soma;
}
console.log(`Fibonacci de ${num} é ${anterior}`);
