import { ReactNode } from 'react';
import Image from 'next/image';

type CardProps = {
  children: ReactNode;
  title: string;
  icon?: string;
  className?: string;
  delay?: number;
};

export default function Card({
  children,
  title,
  icon,
  className = '',
  delay = 0,
}: CardProps) {
  const animationStyle = {
    animationDelay: `${delay}s`,
  };

  return (
    <div 
      className={`bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 shadow-lg hover:shadow-emerald-900/20 hover:border-emerald-800/50 transition-all duration-500 ${className}`}
      style={animationStyle}
    >
      {icon && (
        <div className="mb-5 bg-gradient-to-br from-emerald-900/50 to-blue-900/50 rounded-lg p-3 inline-block">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}