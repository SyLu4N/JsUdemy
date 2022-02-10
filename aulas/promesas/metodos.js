function rand(max, min) {
  max *= 1000;
  min *= 1000;
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) =>{
    if(typeof msg !== 'string') reject('Deu ruim');

    setTimeout(() => {
      resolve(msg + ' - Prosime resolvida!');
    }, tempo);
  });
}

//Prosime.all / Promise.race / Prosime.resolve / Prosime.reject

const prosimes = [
  'Primeiro valor',
  espera('Promise 1', rand(1, 5)),
  espera('Promise 2', rand(1, 4)),
  espera('Promise 3', rand(3, 5)),
  'Ultimo valor'
];

Promise.all(prosimes).then(msg =>{
  console.log(msg);
}).catch( e =>{
  console.log(e);
});