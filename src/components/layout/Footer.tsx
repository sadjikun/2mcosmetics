// src/components/layout/Footer.tsx
import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Section contact en haut */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">+221 76 763 68 38</h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">contact@reen.sn</h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Dakar, Sénégal</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Section principale */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Logo + Description + Horaires + Réseaux */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient mb-4">REEN</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Des soins inspirés par la nature sénégalaise pour révéler l'éclat de votre peau.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Horaires</h4>
                <p className="text-gray-400 text-sm">Lundi au Samedi - 08:00 - 18:00</p>
              </div>

              <div>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 border border-gray-600 hover:border-brand-brown flex items-center justify-center hover:bg-brand-brown transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-600 hover:border-brand-brown flex items-center justify-center hover:bg-brand-brown transition-all">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-600 hover:border-brand-brown flex items-center justify-center hover:bg-brand-brown transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-white font-semibold mb-6">Pages</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Accueil</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">À propos</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Boutique</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Utilitaires */}
            <div>
              <h4 className="text-white font-semibold mb-6">Informations</h4>
              <ul className="space-y-3">
                <li><Link href="/livraison" className="text-gray-400 hover:text-white transition-colors text-sm">Livraison</Link></li>
                <li><Link href="/retours" className="text-gray-400 hover:text-white transition-colors text-sm">Retours</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
                <li><Link href="/cgv" className="text-gray-400 hover:text-white transition-colors text-sm">CGV</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6">Beauty Updates</h4>
              <p className="text-gray-400 text-sm mb-6">
                Restez informé : Rejoignez notre newsletter dès aujourd'hui !
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-none text-white placeholder-gray-400 focus:border-brand-brown focus:outline-none transition-colors text-sm"
                />
                <button className="w-full bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100 transition-colors text-sm flex items-center justify-center">
                  <span>S'INSCRIRE</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright + Moyens de paiement */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © REEN | Conçu par Sadjikun - Propulsé par Defko
            </p>
            
            {/* Moyens de paiement (placeholder) */}
            <div className="flex space-x-4">
              <div className="bg-gray-800 px-3 py-2 rounded text-xs font-semibold">Orange Money</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs font-semibold">Wave</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs font-semibold">Visa</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs font-semibold">PayPal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}