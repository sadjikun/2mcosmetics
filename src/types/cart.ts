import { Product } from "./product";

// src/types/cart.ts
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  image: string;
  slug: string;
  volume: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
  currency: string;
}

export interface CartActions {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
}