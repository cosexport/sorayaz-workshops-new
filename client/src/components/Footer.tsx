import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Sorayaz Workshops</h3>
            <p className="text-sm text-muted-foreground">
              Ateliers d'art-thérapie et créatifs à Casablanca, dédiés à l'expression, la créativité et le bien-être.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-accent transition-colors">
                  Nos ateliers
                </a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-accent transition-colors">
                  Pour les entreprises
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  Galerie
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+212702008334" className="hover:text-accent transition-colors">
                  +212 7 02 00 83 34
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:contact@sorayazworkshops.ma" className="hover:text-accent transition-colors">
                  contact@sorayazworkshops.ma
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Sorayaz Workshops. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
