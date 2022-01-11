const data = new Date();

const dia = data.getDate();
const min = checkMin(data.getMinutes());

function checkMin(min) {
  return min >= 10 ? min : `0${min}`;
}

function checkDay(data) {
  const semana = data.getDay();
  const semanas = [ 'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-Feira' ,'Sexta-feira', 'Sabádo'];
  return semanas[semana];
}

function checkMonth(data) {
  let month = data.getMonth();
  if (month === 0) month ='Janeiro';
  if (month === 1) month ='Fevereiro';
  if (month === 2) month ='Março';
  if (month === 3) month ='Abril';
  if (month === 4) month ='Maio';
  if (month === 5) month ='Junho';
  if (month === 6) month ='Julho';
  if (month === 7) month ='Agosto';
  if (month === 8) month ='Setembro';
  if (month === 9) month ='Outubro';
  if (month === 10) month ='Novembro';
  if (month === 11) month ='Dezembro';
  return month;
}

function setText() {

  const day = document.querySelector('.day')
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  day.innerHTML = '';
  day.innerHTML += `${checkDay(data)}, ${dia} de ${checkMonth(data)} de ${data.getFullYear()}`;

  hours.innerHTML = '';
  hours.innerHTML += data.getHours();

  minutes.innerHTML = '';
  minutes.innerHTML += min;

  seconds.innerHTML = '';
  seconds.innerHTML += data.getSeconds();
}

setText();