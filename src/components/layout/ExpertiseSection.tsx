// src/components/layout/ExpertiseSection.tsx
import { CheckCircle, Heart, Shield } from 'lucide-react'

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Notre Expertise</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un soin REEN, c'est la rigueur appliquée à chaque étape
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-brand-brown rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-semibold brand-brown mb-4">Les Résultats</h3>
            <p className="text-gray-700 leading-relaxed">
              Choix ciblé des vecteurs d'actifs pour une pénétration optimale au cœur de l'épiderme.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-semibold brand-brown mb-4">La Texture</h3>
            <p className="text-gray-700 leading-relaxed">
              Sélection rigoureuse des actifs, équilibre des phases et stabilité parfaite des émulsions.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-brand-brown rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-semibold brand-brown mb-4">Le Confort</h3>
            <p className="text-gray-700 leading-relaxed">
              Ajustement précis du pH pour préserver l'intégrité de la barrière cutanée.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-gradient">Testé, équilibré, respectueux de votre peau.</p>
        </div>
      </div>
    </section>
  )
}