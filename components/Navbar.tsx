'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Team', href: '/team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Animations
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const menuItemVariants = {
    closed: { 
      opacity: 0,
      y: 20 
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
      }
    }
  };
  
  const logoVariants = {
    normal: { scale: 1, color: "#fff" },
    scrolled: { scale: 0.9 }
  };

  return (
    <>
      {/* Regular header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-zinc-900/80 backdrop-blur-lg shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial="normal"
            animate={isScrolled ? "scrolled" : "normal"}
            variants={logoVariants}
            transition={{ duration: 0.3 }}
          >
            <Image 
            src="/logo.png"
            alt="Ventures"
            width={60}
            height={10}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300 ${
                  pathname === link.href 
                    ? 'text-emerald-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="sm">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </header>

      {/* Completely separate mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
              style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            />
            
            <motion.div
              className="fixed inset-0 z-50 bg-zinc-900 overflow-hidden"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'fixed' }}
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex justify-between items-center py-5 px-4 border-b border-zinc-800">
                <Image 
            src="/logo.png"
            alt="Ventures"
            width={40}
            height={10}
            />
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md hover:bg-zinc-800 transition-colors"
                    aria-label="Close menu"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
                
                {/* Menu items */}
                <motion.div 
                  className="flex flex-col items-center justify-center flex-grow py-10 space-y-8"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                >
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.name} 
                      variants={menuItemVariants}
                      custom={index}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={link.href}
                        className={`text-xl transition-colors duration-300 ${
                          pathname === link.href 
                            ? 'text-emerald-400 font-medium' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    variants={menuItemVariants}
                    custom={navLinks.length}
                    initial="closed"
                    animate="open"
                  >
                    <Button 
                      href="/contact" 
                      variant="primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.div 
                  className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}