import { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CardProps = {
  children: ReactNode;
  title: string;
  icon?: string;
  className?: string;
  delay?: number;
  variant?: 'default' | 'bordered' | 'glowing';
};

export default function Card({
  children,
  title,
  icon,
  className = '',
  delay = 0,
  variant = 'default',
}: CardProps) {
  const baseClasses = "rounded-xl p-6 md:p-8 transition-all duration-500";
  
  const variantClasses = {
    default: "bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:shadow-xl hover:shadow-emerald-900/10 hover:border-emerald-800/30",
    bordered: "bg-zinc-900/60 backdrop-blur-md border-2 border-gradient-to-br hover:shadow-xl hover:shadow-emerald-900/10",
    glowing: "bg-zinc-900/60 backdrop-blur-md border border-zinc-800 hover:shadow-xl hover:shadow-emerald-500/20 hover:border-emerald-500/30"
  };

  return (
    <motion.div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {icon && (
        <div className="mb-5 rounded-lg p-3 inline-flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-lg blur-sm"></div>
          <div className="relative">
            <Image src={icon} alt={title} width={32} height={32} className="text-emerald-500" />
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{title}</h3>
      
      <div className="text-gray-300 leading-relaxed">{children}</div>
      
      {variant === 'glowing' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 rounded-b-xl"></div>
      )}
    </motion.div>
  );
}