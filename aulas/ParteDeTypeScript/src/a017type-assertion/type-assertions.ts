/* Recomendado */

// Condicional
const body1 = document.querySelector('body'); // Caso não seja nulo
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement; // Não é nulo
body3.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Olá, mundo!';
input.focus();

/* Não recomendado */

//HTMLElement
const body4 = document.querySelector('body') as unknown as number;
body4.toFixed(2);

// No-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
