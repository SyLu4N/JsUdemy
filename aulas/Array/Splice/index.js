const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//                           indice > delete > add
const removidos = nomes.splice(3 , 2, 'Luan', 'Carlos');

console.log(nomes, removidos);