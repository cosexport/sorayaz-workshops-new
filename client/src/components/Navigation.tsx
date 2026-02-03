import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '#about' },
    { label: 'Ateliers', href: '#workshops' },
    { label: 'Entreprises', href: '#corporate' },
    { label: 'Galerie', href: '#gallery' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-accent hover:text-primary transition-colors">
            Sorayaz Workshops
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/212702008334"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-primary transition-colors font-medium"
        >
          Nous contacter
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/212702008334"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-primary transition-colors font-medium text-center"
            >
              Nous contacter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
