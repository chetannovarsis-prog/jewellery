import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Collection', href: '#' },
    { name: 'Trending', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Bulk', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <a href="/" className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
            Brand<span className="text-yellow-600">Name</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-[2] justify-center items-center space-x-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative group text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex-1 flex items-center justify-end space-x-6">
          <button className={`transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'}`}>
            <Search size={20} />
          </button>
          <button className={`transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'}`}>
            <User size={20} />
          </button>
          <button className={`relative transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'}`}>
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button 
            className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
