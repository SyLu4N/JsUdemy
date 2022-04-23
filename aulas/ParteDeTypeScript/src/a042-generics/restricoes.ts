type getKeyFn = <O, K extends keyof O>(objeto: O, key: K) => O[K];

const getKey: getKeyFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
};

const vacinas = getKey(animal, 'vacinas');
const cor = getKey(animal, 'cor');

console.log(cor, vacinas);
