/* function rand(max = 3000, min = 1000) {
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

function funcaoOne(callback) {
  setTimeout(() => {
    console.log('Função 1 Executada');
  }, rand());
}

function funcaoTwo(callback) {
  setTimeout(() => {
    console.log('Função 2 Executada');
  }, rand());
}

function funcaoThree(callback) {
  setTimeout(() => {
    console.log('Função 3 Executada');
  }, rand());
}

funcaoOne();
funcaoTwo();
funcaoThree();
console.log('Olá Mundo!') */

//Para arrumar a orden. Usaremos Callback =
//opção 01:

/* function rand(max = 3000, min = 1000) {
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

function funcaoOne(callback) {
  setTimeout(() => {
    console.log('Função 1 Executada');
    if (callback) callback();

  }, rand());
}

function funcaoTwo(callback) {
  setTimeout(() => {
    console.log('Função 2 Executada');
    if (callback) callback();

  }, rand());
}

function funcaoThree(callback) {
  setTimeout(() => {
    console.log('Função 3 Executada');
    if (callback) callback();

  }, rand());
}

funcaoOne(function(){
  funcaoTwo(function () {
    funcaoThree(function () {
      console.log('Olá mundo!') //callback hell
    });
  });
}); */

//opção02 'Não gostei muito'

function rand(max = 3000, min = 1000) {
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

function funcaoOne(callback) {
  setTimeout(() => {
    console.log('Função 1 Executada');
    if (callback) callback();

  }, rand());
}

function funcaoTwo(callback) {
  setTimeout(() => {
    console.log('Função 2 Executada');
    if (callback) callback();

  }, rand());
}

function funcaoThree(callback) {
  setTimeout(() => {
    console.log('Função 3 Executada');
    if (callback) callback();

  }, rand());
}

funcaoOne(f1callback);

function f1callback() {
  funcaoTwo(f2callback);
}

function f2callback() {
  funcaoThree(f3callback);
}

function f3callback() {
  console.log('Olá mundo!')
}
