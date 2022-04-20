export class Calculadora {
  constructor(public _number: number) {}

  add(n: number): this {
    this._number += n;
    return this;
  }

  sub(n: number): this {
    this._number -= n;
    return this;
  }

  div(n: number): this {
    this._number /= n;
    return this;
  }

  mul(n: number): this {
    this._number *= n;
    return this;
  }

  get number(): number {
    return this._number;
  }
}

export class subCalculadora extends Calculadora {
  pow(n: number): this {
    this._number **= n;
    return this;
  }
}

const calculadora = new Calculadora(10);
calculadora.add(6).sub(5);
console.log(calculadora.number);

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com/').setMethod('post').send();
