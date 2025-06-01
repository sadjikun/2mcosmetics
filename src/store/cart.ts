// src/store/cart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductVariant } from '@/types/product';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  
  // Getters
  getItemCount: () => number;
  getTotalPrice: () => number;
  getItemByProduct: (productId: string, variantId?: string) => CartItem | undefined;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product, variant, quantity = 1) => {
        const items = get().items;
        const existingItemIndex = items.findIndex(
          item => 
            item.product.id === product.id && 
            item.variant?.id === variant?.id
        );
        
        if (existingItemIndex > -1) {
          // Mettre à jour la quantité si l'item existe déjà
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ items: updatedItems });
        } else {
          // Ajouter un nouvel item
          set({ 
            items: [...items, { product, variant, quantity }]
          });
        }
      },
      
      removeItem: (productId, variantId) => {
        set({
          items: get().items.filter(
            item => !(
              item.product.id === productId && 
              item.variant?.id === variantId
            )
          )
        });
      },
      
      updateQuantity: (productId, quantity, variantId) => {
        if (quantity <= 0) {
          get().removeItem(productId, variantId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.product.id === productId && item.variant?.id === variantId
              ? { ...item, quantity }
              : item
          )
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
      
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.variant ? item.variant.price : item.product.price;
          return total + (price * item.quantity);
        }, 0);
      },
      
      getItemByProduct: (productId, variantId) => {
        return get().items.find(
          item => 
            item.product.id === productId && 
            item.variant?.id === variantId
        );
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);