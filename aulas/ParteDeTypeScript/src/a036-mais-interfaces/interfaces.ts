interface People {
  name: string;
}

interface People {
  surname: string;
}

interface People {
  readonly endereco: string[];
}

interface People {
  idade?: string;
}

const people: People = {
  name: 'Luan',
  surname: 'Simões',
  endereco: ['Benjamin Constant'],
};

console.log(people);
