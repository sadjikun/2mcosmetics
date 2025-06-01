// src/components/layout/CTASection.tsx
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-brown to-brand-green">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-white mb-6">
          L'élégance d'un retour à l'essentiel
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Découvrez dès maintenant nos soins inspirés du terroir sénégalais pour révéler 
          l'éclat naturel de votre peau.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/products"
            className="bg-white text-brand-brown px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Commander maintenant
          </Link>
          <Link 
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-brand-brown transition-all"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}