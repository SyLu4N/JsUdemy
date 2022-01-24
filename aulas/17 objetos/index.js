const pessoa = { 
  nome: 'Luan',
  sobrenome: 'Simões',
  idade: 20,
  endereço: {
    rua: 'Beijamin Constant',
    numero: 287,
    cidade: 'Suzano'
  }
 };

const {nome: nomeMasculo, sobrenome, idade} = pessoa;
const {endereço: {rua: r,  numero,  cidade}} = pessoa;

console.log(nomeMasculo, sobrenome);
console.log(`${idade} anos.`);
console.log(`${r}, n°${numero} - ${cidade}.`);