import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
}: ButtonProps) {
  const baseClasses = "font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:brightness-110 shadow-md hover:shadow-lg hover:shadow-emerald-500/20",
    secondary: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 shadow-md hover:shadow-lg",
    outline: "bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10",
    ghost: "bg-transparent text-white hover:bg-white/10"
  };
  
  const sizeClasses = {
    xs: "text-xs px-2.5 py-1 gap-1.5",
    sm: "text-sm px-3.5 py-1.5 gap-2",
    md: "text-base px-5 py-2.5 gap-2.5",
    lg: "text-lg px-7 py-3 gap-3"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600/20 to-blue-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      )}
      
      {icon && <span className="relative">{icon}</span>}
      <span className="relative">{children}</span>
      
      {variant === 'primary' && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      )}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={classes} tabIndex={0} aria-label={typeof children === 'string' ? children : undefined}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      tabIndex={0}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {content}
    </button>
  );
}