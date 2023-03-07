/*let x = 3;
let z = 5;
let res = 0;



for(let i = 0; i < 1000; i++){
    if(i % x == 0){
        res += i;
    }
}

console.log ("A soma dos multiplos de 3 abaixo de 1000, é: " +res);*/

/*let x = 3;
let z = 5;
let res = 0;



for(let i = 0; i < 1000; i++){
    if(i % z == 0){
        res += i;
    }
}

console.log ("A soma dos multiplos de 5 abaixo de 1000, é: " +res);*/


let count = 0;

for (i = 1; i < 1000; i++) {
    if ( (i % 3) == 0 || (i%5) == 0 ) {
       count += i;
    }
} console.log("A soma dos multiplos de 3 ou 5 abaixo de 1000, é: " +count)