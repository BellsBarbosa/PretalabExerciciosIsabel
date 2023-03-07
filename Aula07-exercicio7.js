/*for(i = 0; i <= 400; i++){
    if(i % 2 != 0)
        console.log (i);
}*/

/*Resolução com função
function primeNumber(num) {
    for (let divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

let determinadoNumero = 400;

for (let i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);*/

/* Resolução online: https://www.javascriptprogressivo.net/2018/12/Verificar-Numero-Primo-Testar-Descobrir.html
Resolução com while
let i = 2;
let j = 1;
let soma = 0;
console.log(`Números primos de 1 até 400 é: `);
while(i < 400){
j = 2;
while(j < i){
if(i % j ==0){
j = i + 1;
}else{
j = j + 1;
}
}
if( j == i ){
console.log(i)
soma = soma + i;
}
i = i +1;
}

console.log(`soma dos números primos: ${soma.toLocaleString("pt-BR") }`)*/

/*
for(let i = 2; i <= 400; i++){
    let ePrimo = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0) {
            ePrimo = false;
        }
    }
    if(ePrimo === true){
        console.log(i);
    }
}*/

/*function primeNumber(num) {
    for (let divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

let determinadoNumero = 400;

for (let i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);*/

for(let num = 2; num <= 400; num++){  
    let confere = 0  
for (let i = 2; i < num; i++){
  if (num % i === 0){
    confere = confere + 1
  } else {
    confere = confere + 0
  }
} 
if (confere === 0){
  console.log(num)
} 
}