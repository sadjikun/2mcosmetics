// src/types/product.ts

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string; // "XOF"
  volume: string; // "50G", "30ml", "120ml", etc.
  
  description: {
    short: string;
    main: string;
    benefits: string;
  };
  
  properties: {
    naturalOrigin: string; // "90%"
    texture: string;
    pH?: string; // "4,5 - 5,5"
    skinType: string; // "Tous types de peaux"
  };
  
  usage: {
    when: string; // "jour et/ou nuit"
    instructions: string;
  };
  
  activeIngredients: Array<{
    name: string;
    description: string;
  }>;
  
  fullIngredientsList: string;
  
  images: {
    main: string;
    gallery: string[];
    thumbnail: string;
  };
  
  pricing: {
    hasDiscount: boolean;
    originalPrice?: number | null;
  };
  
  reviews: {
    count: number;
    averageRating?: number | null;
    hasReviews: boolean;
  };
  
  inventory: {
    inStock: boolean;
    quantity: number;
  };
  
  seo: {
    slug: string;
  };
  
  category: string;
  tags: string[];
  
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  name: string; // ex: "50ml", "100ml"
  price: number;
  originalPrice?: number;
  sku: string;
  inStock: boolean;
  quantity: number;
}

// Type pour le panier
export interface CartItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
}

// Types pour les catégories
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Type pour la structure complète des données
export interface ProductData {
  products: Product[];
  categories: Category[];
}