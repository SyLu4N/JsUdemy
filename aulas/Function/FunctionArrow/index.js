//Jeito que eu fiz
function maiorNumero(x, y) {
  let maior = x;
  if (maior < y) maior = y;
  return maior;
}
console.log(maiorNumero(20, 10));


//Opção número 1:

function max(x, y) {
  return x > y ? x : y;
}

//Oção número 2:

const max2 = (x, y) => x > y ? x : y;
console.log(max2(1000, 200))






const paisagem = (altura, largura) => largura > altura;
console.log(paisagem(5000, 1000));