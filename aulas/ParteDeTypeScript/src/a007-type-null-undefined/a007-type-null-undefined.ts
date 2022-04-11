let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
/* const squareOfTwoString = squareOf('23');
 */
if (squareOfTwoNumber === null) {
  console.log('Conta Inválida');
} else {
  console.log(squareOfTwoNumber);
}
