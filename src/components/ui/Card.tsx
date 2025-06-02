import { cn } from "@/lib/utils";

// src/components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={cn(
      'bg-white p-6 shadow-lg border border-gray-100',
      hover && 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
      className
    )}>
      {children}
    </div>
  );
}