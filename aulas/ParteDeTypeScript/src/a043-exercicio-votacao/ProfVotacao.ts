type VotationOption = {
  numberOfvotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;

    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    this.votations.forEach((voto) => {
      console.log(voto.details);
      voto.votationOptions.forEach((votationOption) => {
        console.log(votationOption.option, votationOption.numberOfvotes);
      });
      console.log('###');
      console.log();
    });
  }
}

const votation1 = new Votation('Qual a sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'Javascriot', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'TypeScript', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Qual a sua cor favorita?');
votation2.addVotationOption({ option: 'Vermelho', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Verde', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfvotes: 0 });
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(0);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
