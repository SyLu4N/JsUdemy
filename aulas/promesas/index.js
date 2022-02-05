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
      resolve(msg);
    }, tempo);
  });
}

espera('Conectando na BD', rand(11, 1)).then(resposta =>{
  console.log(resposta);
  return espera('Carregando BD', rand(11, 1));
}).then(resposta =>{
  console.log(resposta);
  return espera(222, rand(11, 1));
}).then(resposta =>{
  console.log(resposta);
}).then( ()=>{
  console.log('Fim!');
}).catch(e =>{
  console.log('Error:', e);
});

console.log('Isso vai ser executado primeiro')