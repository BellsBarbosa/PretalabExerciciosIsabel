let num = 6;
let soma = 0;

for (i = 1; i < num - 1; i++) {
  if (num % i === 0) {
    soma = soma + i;
  }
}
if (soma === num) {
  console.log(`O número ${num} é perfeito.`);
} else {
  console.log(`O número ${num} não é perfeito`);
}