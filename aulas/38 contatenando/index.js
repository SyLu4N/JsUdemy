const a1 = ['Luan', 'Marcos', 'Nicoli'];
const a2 = ['João', 'Lucas', 'Bruno'];
/* const a3 = a1 + a2; */
/* const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); */
const a3 = [...a1, ...a2, ...['Gustavo', 'Luiz', 'Viviane']];

const rand = (max, min = 0) => { 
  const random = Math.random() * (max - min) - min;
  console.log(`Número random ${random}`);
  return Math.floor(random);
}

console.log(a3[rand(a3.length)]);