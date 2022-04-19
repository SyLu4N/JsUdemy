interface TypeName {
  name: string;
}

interface TypeSurname {
  surname: string;
}

interface TypefullName {
  fullName(): string;
}

type TypePeople = TypeName & TypeSurname & TypefullName;
interface TypePeople2 extends TypeName, TypeSurname, TypefullName {}

export class People implements TypePeople2 {
  constructor(public name: string, public surname: string) {}

  fullName(): string {
    return this.name + ' ' + this.surname;
  }
}

const newPeople = new People('Luan', 'Simões');
console.log(newPeople.fullName());
