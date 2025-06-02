// src/components/layout/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { useCartStore } from '@/store/cart';

const navigationLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/products' },
  { name: 'Notre Histoire', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // ✅ Utilise le nouveau store structure
  const { itemCount, toggleCart } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/90 backdrop-blur-md'
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-brown">
              <span className="font-serif">REEN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-brand-brown border-b-2 border-brand-brown pb-1'
                    : 'text-gray-700 hover:text-brand-brown'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Recherche */}
            <Link
              href="/products?search="
              className="p-2 text-gray-700 hover:text-brand-brown transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Favoris */}
            <Link
              href="/wishlist"
              className="p-2 text-gray-700 hover:text-brand-brown transition-colors"
              aria-label="Favoris"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* Panier */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-brand-brown transition-colors"
              aria-label={`Panier - ${itemCount} articles`}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Actions Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Panier Mobile */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700"
              aria-label={`Panier - ${itemCount} articles`}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-brown text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Menu Toggle */}
            <button 
              className="p-2 text-gray-700 hover:text-brand-brown transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-brand-brown bg-brand-beige px-3 py-2 rounded'
                      : 'text-gray-700 hover:text-brand-brown hover:bg-gray-50 px-3 py-2 rounded'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Actions Mobile */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  href="/products?search="
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-brown hover:bg-gray-50 rounded"
                >
                  <Search className="w-5 h-5 mr-3" />
                  Rechercher
                </Link>
                <Link
                  href="/wishlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-brown hover:bg-gray-50 rounded"
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Favoris
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}