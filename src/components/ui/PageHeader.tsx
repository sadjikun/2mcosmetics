// src/components/ui/PageHeader.tsx
interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
}