// src/components/layout/TestimonialsSection.tsx

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Fatou Diop",
    location: "Dakar",
    avatar: "/images/testimonials/fatou.jpg", // Placeholder
    rating: 5,
    text: "Depuis que j'utilise le sérum REEN Éclat, mes taches ont vraiment diminué ! En 3 semaines, ma peau est plus uniforme et éclatante. Je recommande vivement.",
    product: "Sérum REEN Éclat"
  },
  {
    id: 2,
    name: "Aminata Sall",
    location: "Thiès",
    avatar: "/images/testimonials/aminata.jpg", // Placeholder
    rating: 5,
    text: "La crème visage REEN est devenue indispensable dans ma routine. Ma peau est plus douce, hydratée et j'ai retrouvé un teint lumineux. Produit 100% naturel, je valide !",
    product: "Crème Visage REEN"
  },
  {
    id: 3,
    name: "Mariama Ndiaye",
    location: "Saint-Louis",
    avatar: "/images/testimonials/mariama.jpg", // Placeholder
    rating: 4,
    text: "J'adore la gamme REEN ! Les ingrédients naturels sénégalais font toute la différence. Ma peau n'a jamais été aussi belle et en santé.",
    product: "Gamme complète"
  },
  {
    id: 4,
    name: "Aïssatou Ba",
    location: "Kaolack",
    avatar: "/images/testimonials/aissatou.jpg", // Placeholder
    rating: 5,
    text: "Le gel nettoyant purifie parfaitement sans assécher. Associé au sérum, c'est magique ! Mes imperfections ont disparu progressivement.",
    product: "Routine complète"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-brand-brown mb-6">
            Nos Clientes Témoignent
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez pourquoi des milliers de femmes au Sénégal ont adopté REEN dans leur routine beauté
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-brand-brown"
            >
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-brown flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                
                {/* Contenu */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-brand-brown text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <span className="text-xs text-brand-brown bg-brand-beige px-3 py-1 font-medium">
                      {testimonial.product}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-white p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-brown mb-2">95%</div>
              <div className="text-gray-600 text-sm">De satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-brown mb-2">2 500+</div>
              <div className="text-gray-600 text-sm">Clientes satisfaites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-brown mb-2">4.8/5</div>
              <div className="text-gray-600 text-sm">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-brown mb-2">14j</div>
              <div className="text-gray-600 text-sm">Premiers résultats</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brand-brown to-brand-green text-white p-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              Rejoignez des milliers de femmes satisfaites
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Commencez votre transformation beauté dès aujourd'hui avec nos soins naturels sénégalais
            </p>
            <button className="bg-white text-brand-brown px-8 py-4 font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              COMMANDER MAINTENANT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}