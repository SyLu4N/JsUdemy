import { OrderStatus } from './interfaces/oder-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messasing: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get ordernStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) return console.log('Seu carinho está vazio!');

    this._orderStatus = 'closed';
    this.messasing.sendMessage(
      `Seu pedido com um total de ${this.cart.totalWithDiCount()} foi concluido!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
