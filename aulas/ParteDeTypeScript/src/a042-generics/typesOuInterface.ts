interface PessoaProtocolo<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

type PessoaProtocolo2<T, U> = {
  name: T;
  surname: T;
  age: U;
};

const aluno: PessoaProtocolo = {
  name: 'Luan',
  surname: 'Simões',
  age: 20,
};

const aluno1: PessoaProtocolo2<number, number> = {
  name: 22,
  surname: 233,
  age: 20,
};

console.log(aluno);
console.log(aluno1);
