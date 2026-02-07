import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import WorkshopCard from '@/components/WorkshopCard';
import { Palette, Droplet, Wind, Zap, Sparkles, Gem, Leaf, Heart } from 'lucide-react';

/**
 * Home Page - Sorayaz Workshops
 * Design: Minimalisme Artisanal Chaleureux
 * Palette: Crème, Terracotta, Or, Charbon
 * Typographie: Playfair Display (titres), Inter (corps)
 */

export default function Home() {
  const workshops = [
    {
      title: 'Broderie artistique internationale',
      description: 'Techniques traditionnelles et contemporaines de broderie, du point de croix aux broderies libres.',
      icon: '🧵',
    },
    {
      title: 'Punch-Needle',
      description: 'Créez des motifs texturés avec la technique du punch-needle, parfait pour les décors muraux.',
      icon: '🎨',
    },
    {
      title: 'Peinture sur toile',
      description: 'Explorez l\'acrylique, l\'aquarelle et l\'huile sur toile avec des techniques variées.',
      icon: '🖼️',
    },
    {
      title: 'Fabrication artisanale de bougies',
      description: 'Créez vos propres bougies parfumées avec des techniques artisanales et des matériaux naturels.',
      icon: '🕯️',
    },
    {
      title: 'Art de la poterie',
      description: 'Découvrez le tour de potier et les techniques de modelage pour créer des pièces uniques.',
      icon: '🏺',
    },
    {
      title: 'Peinture sur tissu',
      description: 'Transformez vos tissus avec des techniques de peinture et de teinture créatives.',
      icon: '👕',
    },
    {
      title: 'Art du crochet',
      description: 'Apprenez le crochet du débutant à l\'avancé pour créer des vêtements et accessoires.',
      icon: '🧶',
    },
    {
      title: 'Peinture sur vitrail',
      description: 'Techniques de peinture sur verre et création de vitraux modernes et traditionnels.',
      icon: '✨',
    },
    {
      title: 'Fabrication de bijoux',
      description: 'Créez vos propres bijoux uniques avec des techniques de bijouterie artisanale.',
      icon: '💎',
    },
    {
      title: 'Peinture sur soie',
      description: 'Techniques spécialisées de peinture sur soie pour créer des pièces élégantes et fluides.',
      icon: '🌸',
    },
    {
      title: 'Art du macramé',
      description: 'Nouages et techniques de macramé pour créer des décors muraux et accessoires.',
      icon: '🪢',
    },
    {
      title: 'Peinture sur cuir',
      description: 'Personnalisez et peignez le cuir pour créer des accessoires uniques et durables.',
      icon: '🎭',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-screen md:h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-banner.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Sorayaz Workshops</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Art-thérapie et ateliers créatifs à Casablanca
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#workshops"
              className="px-8 py-3 bg-accent hover:bg-primary text-white rounded-lg font-semibold transition-colors"
            >
              Découvrir les ateliers
            </a>
            <a
              href="https://wa.me/212702008334"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-colors border border-white"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/about-soraya.jpg"
                alt="Soraya, fondatrice de Sorayaz Workshops"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                À propos de Sorayaz
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Sorayaz Workshops est née de la passion de Soraya pour l'art, la créativité et le bien-être. 
                En tant qu'artiste et art-thérapeute, elle a créé un espace inclusif où chacun peut explorer 
                sa créativité, peu importe son niveau d'expérience.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Notre vision est simple : l'art est un outil puissant pour l'expression personnelle, 
                la guérison et la connexion humaine. Nous proposons des ateliers accessibles à tous, 
                du grand public aux entreprises, dans une atmosphère bienveillante et inspirante.
              </p>
              <div className="flex gap-4">
                <div>
                  <h4 className="font-bold text-accent mb-2">Approche inclusive</h4>
                  <p className="text-sm text-muted-foreground">Accessible à tous les niveaux</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Bien-être</h4>
                  <p className="text-sm text-muted-foreground">Art-thérapie et relaxation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nos Ateliers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre large gamme d'ateliers créatifs et d'art-thérapie, 
              conçus pour tous les âges et tous les niveaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <WorkshopCard
                key={index}
                title={workshop.title}
                description={workshop.description}
                icon={workshop.icon}
              />
            ))}
          </div>

          <div className="mt-12 p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Modalités</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-accent mb-2">Grand public</h4>
                <p className="text-muted-foreground">
                  Ateliers individuels ou en groupe, sur place à Casablanca.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Équipe mobile</h4>
                <p className="text-muted-foreground">
                  Nous nous déplaçons pour animer vos événements et ateliers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/team-building.jpg"
                alt="Atelier team-building créatif"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Ateliers pour Entreprises
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Renforcez la cohésion de votre équipe avec nos ateliers créatifs et bien-être spécialement 
                conçus pour les entreprises.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="text-accent text-2xl">🎨</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Team-building créatif</h4>
                    <p className="text-sm text-muted-foreground">
                      Renforcez la collaboration et la créativité de votre équipe.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-accent text-2xl">🧘</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ateliers bien-être</h4>
                    <p className="text-sm text-muted-foreground">
                      Réduisez le stress et améliorez le bien-être de vos collaborateurs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-accent text-2xl">🎪</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Événementiel</h4>
                    <p className="text-sm text-muted-foreground">
                      Animez vos événements avec des ateliers créatifs sur mesure.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                <strong>Équipe déplaçable :</strong> Nous nous adaptons à vos locaux et vos besoins.
              </p>

              <a
                href="https://wa.me/212702008334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent hover:bg-primary text-white rounded-lg font-semibold transition-colors"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* Gallery Section */}
<section id="gallery" className="py-16 md:py-24 bg-secondary">
  <div className="container">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        Galerie
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Découvrez les créations et les moments partagés lors de nos ateliers.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "gallery-1.jpg",
        "gallery-2.jpg",
        "gallery-3.jpg",
        "gallery-4.jpg",
        "gallery-5.jpg",
        "gallery-6.jpg",
      ].map((img, index) => (
        <div
          key={index}
          className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card"
        >
          <img
            src={`/images/${img}`}
            alt={`Galerie - Image ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à explorer votre créativité ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez-nous pour un atelier et découvrez le pouvoir transformateur de l'art et de la créativité.
          </p>
          <a
            href="https://wa.me/212702008334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-accent hover:bg-gray-100 rounded-lg font-semibold transition-colors"
          >
            Nous contacter sur WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
