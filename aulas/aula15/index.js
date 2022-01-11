
function checkDay(data) {
  const semana = data.getDay();
  if (semana === 0) console.log('Domingo');
  if (semana === 1) console.log('Segunda');
  if (semana === 2) console.log('Terça');
  if (semana === 3) console.log('Quarta');
  if (semana === 4) console.log('Quinta');
  if (semana === 5) console.log('Sexta');
  if (semana === 6) console.log('Sabádo');
}

const data =  new Date('2020-10-22 00:00:00');
checkDay(data);
