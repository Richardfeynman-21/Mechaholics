import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'COMPETITIONS', href: '#competitions' },
  { name: 'TIMELINE', href: '#timeline' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'TEAM', href: '#team' },
  { name: 'SPONSORS', href: '#sponsors' },
  { name: 'CONTACT', href: '#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 relative z-50">
          <img src="/assets/mechaholics_logo22.PNG" alt="NITW" className="h-10 w-auto" />
          <img src="/assets/Mechaholics_logo_draft.png" alt="Logo" className="h-10 w-auto" />
          <span className="font-display font-bold text-2xl tracking-widest hidden sm:block text-white">
            MECHAHOLICS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/apply"
            className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors"
          >
            APPLY NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold tracking-widest text-white hover:text-orange-500 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-orange-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              APPLY NOW
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
