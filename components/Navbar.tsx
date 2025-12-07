import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: `#${SectionId.HOME}` },
    { label: 'Skills', href: `#${SectionId.SKILLS}` },
    { label: 'Education', href: `#${SectionId.EDUCATION}` },
    { label: 'Achievements', href: `#${SectionId.ACHIEVEMENTS}` },
    { label: 'Experience', href: `#${SectionId.EXPERIENCE}` },
    { label: 'Projects', href: `#${SectionId.PROJECTS}` },
    { label: 'Contact', href: `#${SectionId.CONTACT}` },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-500 transition-colors">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-mono text-white tracking-tight">
              Makara<span className="text-indigo-400 font-mono">Sok</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 border-l border-slate-700 pl-6">
              <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 font-medium transition-colors"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-4 flex gap-6 border-t border-slate-800 mt-2">
              <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Github size={24} /></a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white"><Mail size={24} /></a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;