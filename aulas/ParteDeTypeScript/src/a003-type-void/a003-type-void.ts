function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Ótavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Ótavio');
pessoa.exibirNome();

export { pessoa };
