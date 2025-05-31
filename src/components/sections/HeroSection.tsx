'use client';

import Image from 'next/image';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/laurent.jpg"
          alt="Laurent Serre - Expert en développement commercial"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-blue-ink/60"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mint-green rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-soft rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Badge d'expertise */}
          <div className="animate-fade-in-up mb-8">
            <div className="inline-flex items-center gap-3 bg-mint-green/10 backdrop-blur-sm border border-mint-green/30 px-6 py-3 rounded-full">
              <span className="w-3 h-3 bg-mint-green rounded-full animate-pulse"></span>
              <span className="font-title font-semibold text-mint-green text-sm md:text-base">
                20 ans d&apos;expertise • Formations sur-mesure
              </span>
            </div>
          </div>

          {/* Titre punchy */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-title font-extrabold text-white leading-tight drop-shadow-lg">
            <span className="block">De l&apos;effort commercial</span>
            <span className="block text-mint-green">au levier stratégique</span>
          </h1>

          {/* Sous-titre inspirant */}
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-body text-white/95 leading-relaxed drop-shadow-md px-2">
              Transformez votre force de vente en équipe{" "}
              <span className="text-mint-green font-semibold">engagée</span>,{" "}
              <span className="text-mint-green font-semibold">structurée</span> et{" "}
              <span className="text-mint-green font-semibold">performante</span>.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl font-italic text-white/90 leading-relaxed drop-shadow-sm px-2">
              Avec 20 ans de terrain et les meilleurs outils d&apos;aujourd&apos;hui, je vous aide à vendre mieux, 
              plus humainement, et durablement.
            </p>
          </div>

          {/* CTAs principaux */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row justify-center items-center pt-6 sm:pt-8 pb-12 sm:pb-16 px-4">
            <button 
              onClick={() => scrollToSection('diagnostic')}
              className="w-full sm:w-auto bg-mint-green hover:bg-mint-green/90 text-white font-title font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-mint-green/30 animate-glow group cursor-pointer"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-xl sm:text-2xl group-hover:animate-bounce-in">🎯</span>
                Faire le diagnostic gratuit
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('cas-clients')}
              className="w-full sm:w-auto border-3 border-white text-white hover:bg-white hover:text-blue-ink font-title font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 group shadow-lg cursor-pointer"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-xl sm:text-2xl group-hover:animate-bounce-in">📊</span>
                Voir les cas clients
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll - repositionné */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-mint-green rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-lg">
          <div className="w-1 h-3 bg-mint-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 