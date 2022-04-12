type hasName = { name: string };
type hasSurname = { surname: string };
type hasAge = { age: number };
type Pessoa = hasName & hasSurname & hasAge; // & = and

/* type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;
 */

const pessoa: Pessoa = {
  name: 'Luan',
  surname: 'Simões',
  age: 20,
};

console.log(pessoa);

export { pessoa };
