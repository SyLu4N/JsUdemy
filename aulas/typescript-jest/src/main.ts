import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import {
  EnterpriseCustomer,
  //IndividualCustomer,
} from './classes/interfaces/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();

const notDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(notDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
/* const individualCustumer = new IndividualCustomer(
  'Luan',
  'Simões',
  '123.123.123-02',
); */

const enterpriseCustomer = new EnterpriseCustomer('Asimões', '12.123/0001-02');

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiCount());
console.log(order.ordernStatus);

order.checkout();
