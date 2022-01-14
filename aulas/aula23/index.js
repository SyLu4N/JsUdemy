function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

rand = random(10, 50);
contador = 0;

while (rand !== 10) {
  rand = random(10, 50);
  console.log(rand);
  contador++;
}

console.log(`Tivemos que executar ${contador} vezes até conseguir o número 10`);
