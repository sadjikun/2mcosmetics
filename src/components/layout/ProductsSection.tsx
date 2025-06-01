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
            <div key={product.id} className="bg-white shadow-2xl transition-all duration-300 group relative">
              {/* Image */}
              <div className="w-full h-80 bg-brand-beige relative overflow-hidden">
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                {product.pricing.hasDiscount && product.pricing.originalPrice && (
                  <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 text-xs font-bold">
                    -{Math.round(((product.pricing.originalPrice - product.price) / product.pricing.originalPrice) * 100)}%
                  </div>
                )}
              </div>
              
              {/* Contenu */}
              <div className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-display font-bold text-brand-brown">{product.name}</h3>
                <p className="text-gray-600 text-lg">{product.description.short}</p>
                
                <div className="py-2">
                  <span className="text-3xl font-bold text-brand-brown">
                    {new Intl.NumberFormat('fr-FR').format(product.price)} {product.currency}
                  </span>
                  {product.pricing.hasDiscount && product.pricing.originalPrice && (
                    <div className="text-sm text-gray-400 line-through mt-1">
                      {new Intl.NumberFormat('fr-FR').format(product.pricing.originalPrice)}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Bouton - Toujours visible sur mobile, hover sur desktop */}
              <div className="px-8 pb-8">
                <button className="w-full bg-brand-brown text-white py-4 font-semibold text-lg hover:bg-brand-brown/90 transition-colors md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-4 md:group-hover:translate-y-0 md:transition-all md:duration-300">
                  AJOUTER À LA CARTE
                </button>
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