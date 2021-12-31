const num = Number(prompt('Digite um número: '));
const num2 = Number(prompt('Digite outro número: '));
let resultado = num + num2;
const acerto = confirm(`O resultado da sua soma é ${resultado}, acertei?`);
if(acerto == false){
    alert('Poxa que pena, me desculpe!');
}else{
    alert('O pai é brabo!');
}