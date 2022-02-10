function rand(max = 4, min = 1) {
  max *= 1000;
  min *= 1000;
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(typeof msg !== 'string'){ 
        reject('Deu ruim');
        return;
      }

      resolve(msg + ' - Prosime resolvida!');
    }, tempo);
  });
}

async function executa () {
  try {
    const fase1 = await espera('Fase 1', rand());
    console.log(fase1);
  
    const fase2 = await espera( 2, rand());
    console.log(fase2);
  
    const fase3 = await espera('Fase 3', rand());
    console.log(fase3);
  
    console.log('Terminamos!')

  } catch (error) {
    console.log(error);
  }
}

executa();