// src/components/layout/ProductsSection.tsx
import Link from 'next/link'
import Image from 'next/image'
import products from '@/data/products.json'

export function ProductsSection() {
  // Prendre les 3 premiers produits avec prix définis
  const featuredProducts = products.products.filter(product => product.price > 0).slice(0, 3)

  return (
    <section className="py-20 bg-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Notre Gamme</h2>
          <p className="text-xl text-brand-beige max-w-4xl mx-auto">
            REEN est né pour celles/ceux qui veulent plus que des promesses : des résultats visibles et durables.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white group cursor-pointer p-8">
              {/* Image avec overlay bouton au hover */}
              <div className="relative bg-gray-100 overflow-hidden h-72">
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                
                {/* Badge promo */}
                {product.pricing.hasDiscount && product.pricing.originalPrice && (
                  <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 text-xs font-bold">
                    -{Math.round(((product.pricing.originalPrice - product.price) / product.pricing.originalPrice) * 100)}%
                  </div>
                )}
                
                {/* Bouton hover - Desktop seulement */}
                <div className="hidden md:flex absolute inset-0 bg-black/20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-brand-brown text-white px-8 py-3 font-semibold hover:bg-brand-brown/90 transition-colors">
                    AJOUTER À LA CARTE
                  </button>
                </div>
              </div>
              
              {/* Contenu en dessous */}
              <div className="pt-6 text-center space-y-3">
                {/* Étoiles */}
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Catégorie */}
                <p className="text-gray-600 text-sm uppercase tracking-wider">{product.category}</p>
                
                {/* Nom du produit */}
                <h3 className="text-2xl font-display font-bold text-gray-900">{product.name}</h3>
                
                {/* Prix */}
                <div className="flex justify-center items-center space-x-3">
                  <span className="text-xl font-bold text-gray-900">
                    {new Intl.NumberFormat('fr-FR').format(product.price)} {product.currency}
                  </span>
                  {product.pricing.hasDiscount && product.pricing.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {new Intl.NumberFormat('fr-FR').format(product.pricing.originalPrice)} {product.currency}
                    </span>
                  )}
                </div>
                
                {/* Bouton mobile - Visible seulement sur mobile */}
                <div className="md:hidden pt-4">
                  <button className="w-full bg-brand-brown text-white py-3 font-semibold hover:bg-brand-brown/90 transition-colors">
                    AJOUTER À LA CARTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-brand-beige mb-8 max-w-3xl mx-auto">
            Une gamme minimaliste et complète pensée pour sublimer l'éclat naturel, 
            lisser les irrégularités et apaiser les inflammations.
          </p>
          <Link 
            href="/products"
            className="bg-white text-brand-brown px-8 py-4 font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-block shadow-lg"
          >
            VOIR TOUS NOS PRODUITS
          </Link>
        </div>
      </div>
    </section>
  )
}