import { OrderStatus } from './interfaces/oder-status';
import { CustomeOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messasing: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomeOrder,
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
    console.log('O cliente é', this.customer.getName(), this.customer.getIDN());
  }
}
