export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    produtos.forEach((produto) => this.produtos.push(produto));
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 19.9);
const produto3 = new Produto('Caneta', 2.9);
const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
carrinhoDeCompras.inserirProdutos(produto1);
console.log(`
Carrinho de compras ${carrinhoDeCompras}.
Você tem ${carrinhoDeCompras.quantidadeProdutos()} produtos.
O valor total da sua compra é de ${carrinhoDeCompras.valorTotal()}.
`);
