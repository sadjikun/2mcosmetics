import { CartItem } from "./cart";

// src/types/order.ts
export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  region: string;
  postalCode?: string;
  country: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  fee?: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  total: number;
  currency: string;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed' 
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';