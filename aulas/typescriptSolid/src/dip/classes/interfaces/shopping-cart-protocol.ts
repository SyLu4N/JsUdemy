import { CartItem } from './cart-Item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;

  addItem(item: CartItem): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiCount(): number;

  isEmpty(): boolean;

  clear(): void;
}
