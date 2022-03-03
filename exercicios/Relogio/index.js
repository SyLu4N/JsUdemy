function data() {
  const data = new Date();
  return data;
}

const day = document.querySelector('.day')
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function checkZero(min) {
  return min >= 10 ? min : `0${min}`;
}

function checkDay(data) {
  const semana = data.getDay();
  const semanas = [ 'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-Feira' ,'Sexta-feira', 'Sabádo'];
  return semanas[semana];
}

function checkMonth(data) {
  const month = data.getMonth();
  const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro',
'Novembro','Dezembro']
  return months[month];
}

function setText() {

  day.innerHTML = '';
  day.innerHTML += `${checkDay(data())}, ${data().getDate()} de ${checkMonth(data())} de ${data().getFullYear()}`;

  hours.innerHTML = '';
  hours.innerHTML += checkZero(data().getHours());

  minutes.innerHTML = '';
  minutes.innerHTML += checkZero(data().getMinutes());

  seconds.innerHTML = '';
  seconds.innerHTML += checkZero(data().getSeconds());
}

setInterval(function () {
  setText();
}, 1000);
