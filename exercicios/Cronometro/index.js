const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pause');
const zerar = document.querySelector('.restart')

let contador = 0;
let timerGo;
let clickInicia = 0;

function criaSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC' //zera o hórario
  });
}

function iniciaCorreto() {
  if(clickInicia === 0){
    timer.innerText = '00:00:01';
    contador++;
    iniciaTimer();
  }

  if(clickInicia !== 0) iniciaTimer();
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
    iniciaCorreto();
    clickInicia++;
    iniciar.innerHTML = 'Iniciar'
    timer.classList.remove('red')
  }

  if(click.classList.contains('pause')){
    clearInterval(timerGo);
    timer.classList.add('red');
    iniciar.innerHTML = 'Retornar'
  }

  if(click.classList.contains('restart')){
    clearInterval(timerGo);
    timer.innerHTML = '00:00:00'
    contador = 0;
    timer.classList.remove('red')
    iniciar.innerHTML = 'Iniciar'
    clickInicia = 0;
  }
})
