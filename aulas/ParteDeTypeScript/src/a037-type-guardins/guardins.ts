export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(2, 5));
console.log(add('Olá,', ' mundo!'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';

  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);

  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log(obj.cor);
      break;
  }
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'verde' });
