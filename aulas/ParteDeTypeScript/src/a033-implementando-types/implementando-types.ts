type TypeName = {
  name: string;
};

type TypeSurname = {
  surname: string;
};

type TypefullName = {
  fullName(): string;
};

export class People implements TypeName, TypeSurname, TypefullName {
  constructor(public name: string, public surname: string) {}

  fullName(): string {
    return this.name + ' ' + this.surname;
  }
}

const newPeople = new People('Luan', 'Simões');
console.log(newPeople.fullName());
