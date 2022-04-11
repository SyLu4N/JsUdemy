/* eslint-disable */
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d,
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
/* let big: bigint = 10n; //bigint
 */

// Arrays

let arrayOfNumbers: Array<number>= [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string>= ['a', 'b', 'c'];
let arrayOfStrings2: string[]= ['a', 'b', 'c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luan',
};

// Funções
function soma(x: number, y: number): number {
  return x+ y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
