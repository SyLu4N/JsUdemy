const objetoA: {
  readonly chaveA: string; // Não podemos alterar essa chave
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //Podemos criar novas chaves
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
