import { CartItem } from './interfaces/cart-Item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
