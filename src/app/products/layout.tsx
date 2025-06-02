// src/app/products/layout.tsx
import Breadcrumb from '@/components/ui/Breadcrumb';

interface ProductsLayoutProps {
  children: React.ReactNode;
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Produits', href: '/products' }
          ]} 
        />
        {children}
      </div>
    </div>
  );
}