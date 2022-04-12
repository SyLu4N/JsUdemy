let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line

const person = {
  name: 'Luan' as const, // não podemos alterar
  surname: 'Simões',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Vermelho'));
console.log(person);
console.log(x, y);

// Module mode
export default 1;
