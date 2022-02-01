let varA = 'A'; //b
let varB = 'B'; //c
let varC = 'C'; //a

/* Maneira que fiz

let coringa = varA;
varA = varB;
varB = varC;
varC = coringa; 
*/

[varA, varB, varC] = [varB, varC, varA] /* Maneira certa */

console.log(varA, varB, varC)