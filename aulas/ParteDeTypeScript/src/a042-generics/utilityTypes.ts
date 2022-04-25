// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luan',
  sobrenome: 'Simões',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade: number;
};

//Required
type PessoaRequired = Required<PessoaProtocol>;
//Partial
type PessoaReadonly = Readonly<PessoaProtocol>;
//Readonly
type PessoaPartial = Partial<PessoaProtocol>;
//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaPartial = {
  nome: 'Luan',
  sobrenome: 'Simões',
};
console.log(objeto2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type typeExclude = Exclude<ABC, CDE>; //OQUE NÃO REPETE NOS 2
type typeExtract = Extract<ABC, CDE>; //OQUE REPETE NOS 2

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

/*
Maneira cumprida -->
type AccountApi = {
  id: string;
  nome: string;
  idade: number;
};
*/

const accountMongo: AccountMongo = {
  _id: '3233r23rd12312eddsadwfergt',
  nome: 'Luan',
  idade: 25,
  sobrenome: 'Simões',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountDate } = accountMongo;
  return { ...accountDate, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default objeto1;
