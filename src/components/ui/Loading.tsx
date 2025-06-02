// src/components/ui/Loading.tsx
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export default function Loading({ 
  size = 'md', 
  text = 'Chargement...', 
  className 
}: LoadingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={cn('flex items-center justify-center space-x-2', className)}>
      <Loader2 className={cn('animate-spin text-brand-brown', sizes[size])} />
      {text && <span className="text-gray-600">{text}</span>}
    </div>
  );
}