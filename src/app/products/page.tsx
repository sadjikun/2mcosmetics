// src/app/products/page.tsx
import { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { ProductData } from '@/types/product';

// Import des données (statiques pour l'instant)
import productsData from '@/data/products.json';

export const metadata: Metadata = {
  title: 'Produits - REEN Cosmétiques Naturels',
  description: 'Découvrez notre gamme complète de soins cosmétiques naturels inspirés des traditions sénégalaises. Crèmes, sérums et soins du corps pour une beauté authentique.',
  keywords: 'cosmétiques naturels, soins visage, sérums, crèmes, Sénégal, bissap, moringa, niacinamide',
};

export default function ProductsPage() {
  const data = productsData as unknown as ProductData;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Container className="py-12">
        {/* En-tête de page */}
        <PageHeader
          title="Notre Collection"
          description="Découvrez nos soins cosmétiques naturels, formulés avec des ingrédients précieux du Sénégal pour révéler la beauté authentique de votre peau."
        >
          {/* Statistiques */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-brown">
                {data.products.length}
              </div>
              <div className="text-sm text-gray-600">Produits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-brown">90%</div>
              <div className="text-sm text-gray-600">Naturel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-brown">100%</div>
              <div className="text-sm text-gray-600">Sénégalais</div>
            </div>
          </div>
        </PageHeader>

        {/* Grille des produits avec filtres */}
        <ProductGrid 
          products={data.products} 
          categories={data.categories} 
        />
      </Container>

      {/* Section CTA */}
      <section className="bg-gradient-to-r from-brand-brown to-brand-green py-16 mt-16">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Besoin de conseils personnalisés ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Notre équipe est là pour vous accompagner dans le choix des soins adaptés à votre peau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/221123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-brown px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Contacter sur WhatsApp
              </a>
              <a
                href="tel:+221123456789"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-brand-brown transition-colors"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}