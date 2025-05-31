export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-ink dark:bg-gray-anthracite text-primary-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section principale du footer */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-title font-bold text-primary-bg mb-2">
                Laurent Serre Développement
              </h3>
              <div className="w-16 h-1 bg-mint-green rounded-full mb-4"></div>
              <p className="font-body text-primary-bg/80 leading-relaxed">
                Transformez votre force de vente en équipe engagée, structurée et performante. 
                Avec 20 ans d&apos;expérience terrain et les meilleurs outils d&apos;aujourd&apos;hui.
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-title font-semibold text-primary-bg mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-mint-green/20 hover:bg-mint-green rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <span className="text-xl group-hover:text-white transition-colors">💼</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-orange-soft/20 hover:bg-orange-soft rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="YouTube"
                >
                  <span className="text-xl group-hover:text-white transition-colors">📺</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-title font-semibold text-primary-bg mb-6">Navigation</h4>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="font-body text-primary-bg/80 hover:text-mint-green transition-colors hover:translate-x-1 transform duration-200 block">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-primary-bg/80 hover:text-mint-green transition-colors hover:translate-x-1 transform duration-200 block">
                    Offre
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-primary-bg/80 hover:text-mint-green transition-colors hover:translate-x-1 transform duration-200 block">
                    Diagnostic
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-primary-bg/80 hover:text-mint-green transition-colors hover:translate-x-1 transform duration-200 block">
                    Cas clients
                  </a>
                </li>
                <li>
                  <a href="#" className="font-body text-primary-bg/80 hover:text-mint-green transition-colors hover:translate-x-1 transform duration-200 block">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact et infos pratiques */}
          <div>
            <h4 className="font-title font-semibold text-primary-bg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">📧</span>
                <div>
                  <p className="font-body text-primary-bg/80 text-sm">Email</p>
                  <a href="mailto:contact@laurent-serre.com" className="font-body text-primary-bg hover:text-mint-green transition-colors">
                    contact@laurent-serre.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">📞</span>
                <div>
                  <p className="font-body text-primary-bg/80 text-sm">Téléphone</p>
                  <a href="tel:+33123456789" className="font-body text-primary-bg hover:text-mint-green transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">📍</span>
                <div>
                  <p className="font-body text-primary-bg/80 text-sm">Zone d&apos;intervention</p>
                  <div className="flex items-center gap-2 text-sm text-gray-anthracite dark:text-primary-bg/70">
                    <span>📍</span>
                    <span>Basé en France • Interventions nationales et internationales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-primary-bg/20"></div>

        {/* Mentions légales et copyright */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-body text-primary-bg/70 text-sm">
              © {currentYear} Laurent Serre Développement. Tous droits réservés.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="#" className="font-body text-primary-bg/70 hover:text-mint-green text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="font-body text-primary-bg/70 hover:text-mint-green text-sm transition-colors">
              CGV
            </a>
            <a href="#" className="font-body text-primary-bg/70 hover:text-mint-green text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="font-body text-primary-bg/70 hover:text-mint-green text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Badge de qualité */}
        <div className="pb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-mint-green/10 px-4 py-2 rounded-full">
            <span className="text-mint-green">🏆</span>
            <span className="font-body text-primary-bg/80 text-sm">
              Consultant certifié • 20 ans d&apos;expérience • +50 entreprises accompagnées
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 