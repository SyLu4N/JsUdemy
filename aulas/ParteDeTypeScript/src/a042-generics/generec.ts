type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>) {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const teste = array.filter((valor) => valor < 5);

const arrayMeu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const teste2 = meuFilter(arrayMeu, (value) => value < 5);

console.log(teste);
console.log(teste2);
