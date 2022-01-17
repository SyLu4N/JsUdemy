function mostraHora() {
  let hora = new Date();

  return hora.toLocaleTimeString('pt-br', {
    hour12: false
  });
}

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 3500);

setTimeout(function () {
  console.log('Olá, mundo!')
}, 5000);