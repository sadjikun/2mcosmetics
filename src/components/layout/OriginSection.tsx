// src/components/layout/OriginSection.tsx
import Image from 'next/image'
import Link from 'next/link'

export function OriginSection() {
  return (
    <section id="origine" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/reen-origins.jpg" 
              alt="Produits REEN avec ingrédients naturels sénégalais"
              width={600}
              height={500}
              className="object-cover w-full h-full shadow-xl"
              quality={95}
            />
          </div>

          {/* Contenu - Focus conversion */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-brown">
              Pourquoi choisir REEN ?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-brand-brown">Formules traditionnelles sénégalaises</span> validées par la science moderne
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-brand-brown">Résultats visibles</span> dès 2 semaines d'utilisation
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-brand-brown">Prix accessible</span> pour une qualité premium
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/products"
                className="bg-brand-brown text-white px-8 py-4 font-semibold hover:bg-brand-brown/90 transition-all transform hover:scale-105 shadow-lg inline-block"
              >
                Commencer ma routine REEN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}