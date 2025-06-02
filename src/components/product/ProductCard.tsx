// src/components/products/ProductCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, isInCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche la navigation vers la page produit
    addItem(product);
  };

  const currentPrice = product.pricing.hasDiscount && product.pricing.originalPrice 
    ? product.pricing.originalPrice 
    : product.price;

  return (
    <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <Link href={`/products/${product.seo.slug}`} className="block relative overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 space-y-2">
            {product.pricing.hasDiscount && (
              <Badge variant="error">Promo</Badge>
            )}
            {!product.inventory.inStock && (
              <Badge variant="warning">Rupture</Badge>
            )}
            {product.tags.includes('nouveau') && (
              <Badge variant="info">Nouveau</Badge>
            )}
          </div>

          {/* Add to Cart Button - Desktop */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inventory.inStock}
              leftIcon={<ShoppingBag className="w-4 h-4" />}
              className="transform scale-90 group-hover:scale-100 transition-transform duration-300"
            >
              {isInCart(product.id) ? 'Ajouté' : 'Ajouter'}
            </Button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <Link href={`/products/${product.seo.slug}`}>
          {/* Brand */}
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          
          {/* Name */}
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-brown transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          {/* Short Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description.short}
          </p>
          
          {/* Volume */}
          <p className="text-xs text-gray-500 mb-3">{product.volume}</p>
        </Link>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {/* Price */}
            <span className="text-lg font-bold text-brand-brown">
              {formatPrice(currentPrice)}
            </span>
            
            {/* Original Price if discount */}
            {product.pricing.hasDiscount && product.pricing.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Add to Cart Button - Mobile */}
          <div className="md:hidden">
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!product.inventory.inStock}
              leftIcon={<ShoppingBag className="w-4 h-4" />}
            >
              {isInCart(product.id) ? 'Ajouté' : 'Ajouter'}
            </Button>
          </div>
        </div>

        {/* Natural Origin Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Badge variant="info" size="sm">
            {product.properties.naturalOrigin} naturel
          </Badge>
        </div>
      </div>
    </div>
  );
}