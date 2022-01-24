
function divisivel(numero) {
  if(numero % 5 === 0 && numero % 3 === 0) return 'FizzBuzz';
  if(numero % 3 === 0) return 'Fizz';
  if(numero % 5 === 0) return 'Buzz';
  return 'Numero de veado';
}

for (let i = 0; i <= 100; i++){

  if(typeof a !== 'number') {
    console.log('NÚMERO ANIMAL!'); 
    break;
  }

  console.log(i, divisivel(i));
}
