// src/components/layout/Navigation.tsx

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cart'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getItemCount, toggleCart } = useCartStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <Link href="/" className="text-2xl font-display font-bold text-gradient">
              REEN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-brown transition-colors">
              Accueil
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-brand-brown transition-colors">
              Produits
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-brown transition-colors">
              Notre Histoire
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-brown transition-colors">
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-brand-brown transition-colors">
              <Search className="w-6 h-6" />
            </button>
            
            <button 
              onClick={toggleCart}
              className="p-2 text-gray-700 hover:text-brand-brown transition-colors relative"
            >
              <ShoppingCart className="w-6 h-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-brown text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-brand-brown transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-brand-brown transition-colors">
                Accueil
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-brand-brown transition-colors">
                Produits
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-brand-brown transition-colors">
                Notre Histoire
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-brand-brown transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}