//const data = new Date(); data atual
//const data = new Date(1990, 3, 12, 13, 47, 55); Ano > mes > dia > hora > minuto > segundo > milisegundo

/* const data = new Date('2019-04-20 20:20:49.100'); //Data por string FAVORITA
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 = Domingo > 6 = Sábado 
console.log(data.toLocaleString()); // arruma a data toLocaleString*/


function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`; //adiciona um 0 quando os segundos foram menor que 10
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  return(`${dia}/${mes}/${ano} ${hora}:${min}:${seg}`);
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)