const timer = document.querySelector('.timer');

let contador = 0;
let timerGo;

function criaSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC' //zera o hórario
  });
}

function iniciaTimer() {
   timerGo = setInterval(function () {
    contador++;
    timer.innerHTML = criaSegundos(contador);
  }, 1000);
}

document.addEventListener('click', function (e) {
  const click = e.target;
  if(click.classList.contains('iniciar')){
    clearInterval(timerGo);
    iniciaTimer();
    iniciar.innerHTML = 'Iniciar'
    timer.style.color = 'black';
  }

  if(click.classList.contains('pause')){
    clearInterval(timerGo);
    timer.style.color = 'red';
    iniciar.innerHTML = 'Retornar'
  }

  if(click.classList.contains('restart')){
    clearInterval(timerGo);
    timer.innerHTML = '00:00:00'
    contador = 0;
    timer.style.color = 'black';
    iniciar.innerHTML = 'Iniciar'
  }
})
