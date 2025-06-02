import { CartItem } from "./cart";
import { Customer, Order, PaymentMethod, ShippingMethod } from "./order";

// src/types/api.ts
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface CreateOrderRequest {
  customer: Customer;
  items: CartItem[];
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
}

export interface CreateOrderResponse {
  order: Order;
  paymentUrl?: string; // Pour redirection paiement
}