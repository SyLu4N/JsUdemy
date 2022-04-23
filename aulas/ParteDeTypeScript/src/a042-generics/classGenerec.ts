export class Pessoa<T, U> {
  constructor(public name: T, public age: U) {}
}

//consegue extensiar
/* const pessoa1 = new Pessoa('Luan', 20);
const pessoa2 = new Pessoa(['Luan'], 20);
const pessoa3 = new Pessoa(['Luan'], { age: 20 });
const pessoa4 = new Pessoa<string, number>('Luan', 20);
 */

export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(element: T): void {
    this.elementos[this.contador] = element;
    this.contador++;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const element = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return element;
  }

  size(): number {
    return this.contador;
  }

  getStack(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Stack<number | string>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('Oi');

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
