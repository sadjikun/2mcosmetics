// src/types/product.ts

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  volume: string;
  description: {
    short: string;
    main: string;
    benefits: string;
  };
  properties: {
    naturalOrigin: string;
    texture: string;
    pH?: string;
    skinType: string;
  };
  usage: {
    when: string;
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
    originalPrice?: number;
  };
  reviews: {
    count: number;
    averageRating?: number;
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