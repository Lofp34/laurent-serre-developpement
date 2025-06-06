'use client';

export default function ProblemSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/equipe_bureau.jpg)',
        }}
      />
      
      {/* Overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-gray-anthracite/85 dark:bg-gray-anthracite/90" />
      
      {/* Contenu par-dessus le fond */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white leading-tight">
            Votre équipe commerciale donne beaucoup…
            <span className="block text-orange-soft">mais obtient peu ?</span>
          </h2>
        </div>

        {/* 3 bullets illustrées */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Bullet 1 */}
          <div className="text-center space-y-6 animate-slide-in-left group">
            <div className="w-20 h-20 bg-orange-soft/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-soft/30 transition-all duration-300">
              <span className="text-4xl animate-float">😓</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-title font-bold text-white">
                Travail sans stratégie
              </h3>
              <p className="font-body text-white/90 leading-relaxed">
                Des commerciaux qui travaillent dur… mais sans vraie stratégie.
              </p>
            </div>
          </div>

          {/* Bullet 2 */}
          <div className="text-center space-y-6 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 bg-mint-green/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:bg-mint-green/30 transition-all duration-300">
              <span className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>📉</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-title font-bold text-white">
                Résultats qui stagnent
              </h3>
              <p className="font-body text-white/90 leading-relaxed">
                Des résultats qui stagnent malgré les efforts.
              </p>
            </div>
          </div>

          {/* Bullet 3 */}
          <div className="text-center space-y-6 animate-slide-in-right group" style={{ animationDelay: '0.4s' }}>
            <div className="w-20 h-20 bg-blue-ink/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-ink/30 transition-all duration-300">
              <span className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🎯</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-title font-bold text-white">
                Équipe sans cap
              </h3>
              <p className="font-body text-white/90 leading-relaxed">
                Une équipe qui avance en roue libre, sans cap clair.
              </p>
            </div>
          </div>
        </div>

        {/* Accroche finale */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-sm border-l-4 border-mint-green rounded-r-2xl p-8 mb-8">
            <p className="text-2xl md:text-3xl font-body text-white leading-relaxed mb-4">
              Vous n&apos;avez pas un problème de{" "}
              <span className="font-bold text-orange-soft">motivation</span>.
            </p>
            <p className="text-2xl md:text-3xl font-body text-white leading-relaxed">
              Vous avez un problème de{" "}
              <span className="font-bold text-mint-green">structuration</span>.
              <span className="block mt-2 font-italic text-xl">
                Et cela se corrige.
              </span>
            </p>
          </div>

          {/* CTA incitatif */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-mint-green to-mint-green/90 hover:from-mint-green/90 hover:to-mint-green text-white font-title font-bold px-12 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-mint-green/40 animate-glow group cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl group-hover:animate-bounce-in">🚀</span>
                Parlons-en maintenant !
              </span>
            </button>
            <p className="mt-4 font-italic text-white/80">
              Échange gratuit • Sans engagement • Solution sur mesure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 