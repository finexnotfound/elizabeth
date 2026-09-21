import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'WHAT IS ELIZABETH', href: '#what-is-elizabeth' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'TEST PRACTICE', href: '#test-practice' },
    { label: 'WHY ELIZABETH', href: '#why-elizabeth' },
    { label: 'CREATOR', href: '#creator' },
  ];

  return (
    <header
      id="top-navbar"
      className="sticky top-0 z-40 w-full bg-[#fafafa]/90 backdrop-blur-sm border-b border-[#e5e5e5]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand / System marker */}
        <div className="flex items-center gap-4">
          <a
            href="#overview"
            id="nav-brand-logo"
            className="group flex items-baseline gap-2 text-black hover:opacity-80 transition-opacity"
          >
            <span className="font-ntype text-xl sm:text-2xl font-bold tracking-tight uppercase">
              ELIZABETH
            </span>
            <span className="font-tech-mono text-[10px] tracking-widest text-neutral-400">
              [SYS.01]
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-[#e5e5e5]">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse"></span>
            <span className="font-tech-mono text-[11px] uppercase tracking-wider text-neutral-500">
              ACTIVE RECALL ENGINE
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          id="desktop-nav-menu"
          className="hidden lg:flex items-center gap-6"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-tech-mono text-[11px] uppercase tracking-widest text-neutral-600 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Clock & Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="font-tech-mono text-[11px] text-neutral-800 tracking-wider">
              {currentTime || '08:30:00'}
            </span>
            <span className="font-tech-mono text-[9px] text-neutral-400 tracking-widest">
              SYSTEM ONLINE
            </span>
          </div>

          <button
            id="nav-try-recall-btn"
            type="button"
            onClick={onOpenDemo}
            className="group inline-flex items-center gap-1.5 bg-black text-white px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-tech-mono tracking-wider uppercase hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer rounded-none border border-black"
          >
            <span>TRY RECALL</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-black focus:outline-none border border-[#e5e5e5] bg-white cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-[#e5e5e5] bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-tech-mono text-xs uppercase tracking-widest text-neutral-700 py-1.5 border-b border-neutral-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between text-[11px] font-tech-mono text-neutral-400">
                <span>STATUS: OPERATIONAL</span>
                <span>VER: 2026.09</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
