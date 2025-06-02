// src/components/products/ProductGrid.tsx
'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Product, Category } from '@/types/product';
import { ProductFilters } from '@/types/filters';
import ProductCard from './ProductCard';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';

interface ProductGridProps {
  products: Product[];
  categories: Category[];
}

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [filters, setFilters] = useState<ProductFilters>({
    categories: [],
    priceRange: { min: 0, max: 20000 },
    search: '',
    sortBy: 'name',
    inStock: false,
  });

  const [showFilters, setShowFilters] = useState(false);

  // Filtrer et trier les produits
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Recherche par nom
    if (filters.search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.short.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()))
      );
    }

    // Filtre par catégories
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    // Filtre par prix
    filtered = filtered.filter(product => {
      const price = product.pricing.hasDiscount && product.pricing.originalPrice 
        ? product.pricing.originalPrice 
        : product.price;
      return price >= filters.priceRange.min && price <= filters.priceRange.max;
    });

    // Filtre en stock seulement
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inventory.inStock);
    }

    // Tri
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, filters]);

  const toggleCategory = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: { min: 0, max: 20000 },
      search: '',
      sortBy: 'name',
      inStock: false,
    });
  };

  const activeFiltersCount = filters.categories.length + 
    (filters.search ? 1 : 0) + 
    (filters.inStock ? 1 : 0);

  return (
    <div className="space-y-6">
      {/* Header avec recherche et filtres */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Recherche */}
        <div className="w-full md:w-96">
          <Input
            placeholder="Rechercher un produit..."
            value={filters.search}
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            leftIcon={<Search className="w-4 h-4" />}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Tri */}
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ 
              ...prev, 
              sortBy: e.target.value as ProductFilters['sortBy']
            }))}
            className="px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-brand-brown focus:border-brand-brown"
          >
            <option value="name">Nom A-Z</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="newest">Plus récents</option>
          </select>

          {/* Toggle Filtres */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            leftIcon={<Filter className="w-4 h-4" />}
          >
            Filtres {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </Button>
        </div>
      </div>

      {/* Filtres */}
      {showFilters && (
        <div className="bg-gray-50 p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Catégories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Catégories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="rounded border-gray-300 text-brand-brown focus:ring-brand-brown"
                    />
                    <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Prix */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Prix</h3>
              <div className="space-y-3">
                <Input
                  type="number"
                  placeholder="Prix min"
                  value={filters.priceRange.min}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    priceRange: { ...prev.priceRange, min: Number(e.target.value) }
                  }))}
                />
                <Input
                  type="number"
                  placeholder="Prix max"
                  value={filters.priceRange.max}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    priceRange: { ...prev.priceRange, max: Number(e.target.value) }
                  }))}
                />
              </div>
            </div>

            {/* Options */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Options</h3>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="rounded border-gray-300 text-brand-brown focus:ring-brand-brown"
                />
                <span className="ml-2 text-sm text-gray-700">En stock seulement</span>
              </label>
            </div>
          </div>

          {/* Actions filtres */}
          <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between">
            <Button variant="ghost" onClick={clearFilters}>
              Effacer les filtres
            </Button>
            <span className="text-sm text-gray-600">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      )}

      {/* Filtres actifs */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.categories.map(categoryId => {
            const category = categories.find(c => c.id === categoryId);
            return category ? (
              <Badge key={categoryId} variant="info">
                {category.name}
                <button
                  onClick={() => toggleCategory(categoryId)}
                  className="ml-2 text-brand-brown hover:text-brand-brown/70"
                >
                  ×
                </button>
              </Badge>
            ) : null;
          })}
          {filters.search && (
            <Badge variant="info">
              "{filters.search}"
              <button
                onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
                className="ml-2 text-brand-brown hover:text-brand-brown/70"
              >
                ×
              </button>
            </Badge>
          )}
          {filters.inStock && (
            <Badge variant="success">
              En stock
              <button
                onClick={() => setFilters(prev => ({ ...prev, inStock: false }))}
                className="ml-2 text-green-800 hover:text-green-600"
              >
                ×
              </button>
            </Badge>
          )}
        </div>
      )}

      {/* Grille des produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">Aucun produit trouvé</p>
          <Button onClick={clearFilters}>Effacer les filtres</Button>
        </div>
      )}
    </div>
  );
}