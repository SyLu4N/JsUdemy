type MeuTipo = number;

const arrayNumbers: Array<number> = [1, 3, 4, 5, 6];

console.log(arrayNumbers);

export async function promiseAsync() {
  return 1;
}

export function minhaPromise(): Promise<MeuTipo | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
