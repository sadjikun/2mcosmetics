// src/types/filters.ts
export interface ProductFilters {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  search: string;
  sortBy: 'name' | 'price-asc' | 'price-desc' | 'newest';
  inStock: boolean;
}

export interface FilterOptions {
  categories: Array<{
    id: string;
    name: string;
    count: number;
  }>;
  priceRange: {
    min: number;
    max: number;
  };
}