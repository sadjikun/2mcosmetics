// src/store/cart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Cart, CartItem, CartActions } from '@/types/cart';
import type { Product } from '@/types/product';

interface CartStore extends Cart, CartActions {
  isOpen: boolean;
  toggleCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // État initial
      items: [],
      total: 0,
      itemCount: 0,
      currency: 'XOF',
      isOpen: false,

      // Actions
      addItem: (product: Product, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.productId === product.id);

        if (existingItem) {
          // Mettre à jour la quantité si le produit existe déjà
          get().updateQuantity(product.id, existingItem.quantity + quantity);
        } else {
          // Ajouter nouveau produit
          const newItem: CartItem = {
            id: `cart-${product.id}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            price: product.pricing.hasDiscount && product.pricing.originalPrice 
              ? product.pricing.originalPrice 
              : product.price,
            currency: product.currency,
            quantity,
            image: product.images.main,
            slug: product.seo.slug,
            volume: product.volume,
          };

          set(state => {
            const newItems = [...state.items, newItem];
            return {
              items: newItems,
              total: calculateTotal(newItems),
              itemCount: calculateItemCount(newItems),
            };
          });
        }
      },

      removeItem: (productId: string) => {
        set(state => {
          const newItems = state.items.filter(item => item.productId !== productId);
          return {
            items: newItems,
            total: calculateTotal(newItems),
            itemCount: calculateItemCount(newItems),
          };
        });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set(state => {
          const newItems = state.items.map(item =>
            item.productId === productId
              ? { ...item, quantity }
              : item
          );
          return {
            items: newItems,
            total: calculateTotal(newItems),
            itemCount: calculateItemCount(newItems),
          };
        });
      },

      clearCart: () => {
        set({
          items: [],
          total: 0,
          itemCount: 0,
        });
      },

      getItemQuantity: (productId: string) => {
        const item = get().items.find(item => item.productId === productId);
        return item?.quantity || 0;
      },

      toggleCart: () => {
        set(state => ({ isOpen: !state.isOpen }));
      },
    }),
    {
      name: 'reen-cart-storage',
      // Persister seulement les données importantes (pas isOpen)
      partialize: (state) => ({
        items: state.items,
        total: state.total,
        itemCount: state.itemCount,
        currency: state.currency,
      }),
    }
  )
);

// Fonctions utilitaires
function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}

// Hook personnalisé pour actions courantes
export function useCart() {
  const store = useCartStore();
  
  return {
    ...store,
    
    // Utilitaires supplémentaires
    isEmpty: store.items.length === 0,
    
    // Formatage du total
    getFormattedTotal: () => {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
      }).format(store.total);
    },
    
    // Obtenir le sous-total formaté
    getFormattedSubtotal: () => {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency', 
        currency: 'XOF',
        minimumFractionDigits: 0,
      }).format(store.total);
    },
    
    // Vérifier si un produit est dans le panier
    isInCart: (productId: string) => {
      return store.items.some(item => item.productId === productId);
    },

    // Obtenir un item spécifique
    getItem: (productId: string) => {
      return store.items.find(item => item.productId === productId);
    },
  };
}