// Tuple

const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luan'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luan', 'Miranda'];

/* dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';
 dadosCliente1.pop();*/

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Luiz', 'Ótavio'];
const array2: ReadonlyArray<string> = ['Luan', 'Simões'];

console.log(array1);
console.log(array2);
