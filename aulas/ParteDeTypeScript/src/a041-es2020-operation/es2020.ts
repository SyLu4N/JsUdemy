// Encadeamento opcional e Operador de coalescência nula

type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const documento: Documento = {
  title: 'O título',
  text: 'texto',
  date: new Date(),
};

console.log(
  documento.date?.toLocaleDateString('pt-br') ?? 'Não foi mandado Data',
);

console.log(undefined ?? 'Não foi mandado Data');
