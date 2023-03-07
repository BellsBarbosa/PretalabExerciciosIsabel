const horarioAtual = 15;
let mensagem = "";

if (horarioAtual >= 22 ) 
{ mensagem = "Não deveríamos comer nada, é hora de dormir.";} 
else if (horarioAtual >= 18 && horarioAtual < 22 )
{ mensagem = "Rango da noite, vamos jantar :D";} 
else if (horarioAtual >= 14 && horarioAtual < 18 )
{ mensagem = "Vamos fazer um bolo pro café da tarde?";}
else if (horarioAtual >= 11 && horarioAtual < 14 )
{ mensagem = "Hora do almoço!!!";} 
else if (horarioAtual >= 4 && horarioAtual < 11 )
{ mensagem = "Humm, cheiro de café recém-passado";} 
console.log (mensagem);