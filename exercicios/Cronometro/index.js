

function Cronometro() {
  this.start();
  this.contador = 0;
  this.clickStart = 0;
  this.timerGo;
  this.timer = document.querySelector('.timer');
  this.iniciar = document.querySelector('.start');
}  

Cronometro.prototype.start = function () {
  document.addEventListener('click', e =>{
    const el = e.target
    if(el.classList.contains('start')) this.startCronometro();
    if(el.classList.contains('pause')) this.pauseCronometro();
    if(el.classList.contains('restart')) this.restartCronometro();
  });
}

Cronometro.prototype.startCronometro = function () {
  clearInterval(this.timerGo);
  this.iniciaCorreto();
  this.clickStart++;
  this.iniciar.innerHTML = 'Iniciar';
  this.timer.classList.remove('red');
}

Cronometro.prototype.iniciaCorreto = function () {
  if(this.clickStart === 0){
    this.timer.innerText = '00:00:01';
    this.contador++;
    this.iniciaTimer();
  }else this.iniciaTimer();
}

Cronometro.prototype.iniciaTimer = function () {
  this.timerGo = setInterval(() => {
    this.contador++;
    this.timer.innerText = this.criaSegundos(this.contador * 1000);
  }, 1000);
}

Cronometro.prototype.criaSegundos = function (segundos) {
  const data = new Date(segundos);
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC' 
  });
}

Cronometro.prototype.pauseCronometro = function () {
  clearInterval(this.timerGo);
  this.timer.classList.add('red');
  this.iniciar.innerHTML = 'Retornar'
}

Cronometro.prototype.restartCronometro = function () {
  clearInterval(this.timerGo);
  this.timer.innerHTML = '00:00:00'
  this.contador = 0;
  this.timer.classList.remove('red')
  this.iniciar.innerHTML = 'Iniciar'
  this.clickStart = 0;
}

const tempo = new Cronometro();
