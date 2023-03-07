const venda = 100;
const custo = 50;

const lucro = venda - custo;


if (custo > 0 && venda > 0){
console.log ("Seu lucro vendendo mil unidades foi de: ", lucro * 10000);
} else {
    console.log ("Valor inválido, tente novamente. ");
}