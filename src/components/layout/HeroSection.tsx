import Link from 'next/link'
import Image from 'next/image'
import products from '@/data/products.json'

export function HeroSection() {
  // Prendre les 2 premiers produits pour la hero
  const featuredProducts = products.products.slice(0, 2)
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/reen-hero.jpg"
          alt="REEN - Soins naturels sénégalais"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-brand-brown">
                <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                90% d'origine naturelle • Made in Sénégal
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white">
                <span className="text-brand-beige">REEN</span>, 
                <span className="block">ce que la terre</span>
                <span className="block">murmure à ta peau...</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-lg">
              Des soins inspirés par la nature sénégalaise, 
              <span className="text-brand-beige font-semibold"> formulés avec des ingrédients d'exception</span> 
              pour révéler l'éclat naturel de votre peau.
            </p>
            
            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products"
                className="bg-brand-brown text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-brown/90 transition-all transform hover:scale-105 text-center shadow-2xl text-lg"
              >
                Découvrir la collection
              </Link>
              <Link 
                href="#origine"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-brown transition-all text-center text-lg"
              >
                Notre histoire
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">90%</div>
                <div className="text-sm text-white/80">Origine naturelle</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-white/80">Soins essentiels</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Sénégalais</div>
              </div>
            </div>
          </div>
          
          {/* Produits en avant */}
          <div className="relative lg:block hidden">
            <div className="grid grid-cols-2 gap-6">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className={`group cursor-pointer ${index === 1 ? 'mt-8' : ''}`}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 hover:scale-105 duration-300">
                    <div className="aspect-square bg-gradient-to-br from-brand-beige/50 to-brand-brown/10 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={product.images.main}
                        alt={product.name}
                        fill
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      {product.pricing.hasDiscount && product.pricing.originalPrice && (
                        <div className="absolute top-3 right-3 bg-brand-green text-white px-2 py-1 rounded-full text-xs font-bold">
                          -{Math.round(((product.pricing.originalPrice - product.price) / product.pricing.originalPrice) * 100)}%
                        </div>
                      )}
                      {index === 0 && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Populaire
                        </div>
                      )}
                      {index === 1 && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Nouveau
                        </div>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-brand-brown text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description.short}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-brand-brown">
                          {new Intl.NumberFormat('fr-FR').format(product.price)} {product.currency}
                        </span>
                        {product.pricing.hasDiscount && product.pricing.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            {new Intl.NumberFormat('fr-FR').format(product.pricing.originalPrice)}
                          </span>
                        )}
                      </div>
                      <button className="bg-brand-brown text-white px-4 py-2 rounded-full text-sm hover:bg-brand-brown/90 transition-all transform hover:scale-105">
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Badge confiance */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-brand-brown">Livraison gratuite</div>
                  <div className="text-sm text-gray-600">Partout au Sénégal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}