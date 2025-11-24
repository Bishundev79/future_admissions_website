import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium ${
      isActive ? 'text-primary-600 dark:text-primary-400' : ''
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 py-3 px-4 rounded-lg transition-all font-medium ${
      isActive ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-slate-800' : ''
    }`;

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-soft fixed w-full top-0 z-50 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl sm:text-3xl font-display font-bold text-gradient">
              FutureAdmissions
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/colleges" className={navLinkClass}>
              Colleges
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded p-2"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded p-2"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded p-2"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <DarkModeToggle />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-full hover:shadow-glow transition-all duration-300 font-semibold hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg p-2"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-blue-600 origin-left"
        style={{ scaleX }}
      />

      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 animate-slide-up"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 pt-2 pb-4 space-y-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/services" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/colleges" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
              Colleges
            </NavLink>
            <NavLink to="/gallery" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
            <div className="flex space-x-4 pt-2 px-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded p-2"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={22} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded p-2"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={22} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded p-2"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={22} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="px-4 pt-4">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
