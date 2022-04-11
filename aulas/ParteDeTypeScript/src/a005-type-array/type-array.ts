// Array<T> - t[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenacaoString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenacaoString('Olá,', ' Mundo', '!');
const upper = toUpperCase('Olá,', 'Mundo', '!');

console.log(result, concatenacao, upper);
