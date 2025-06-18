"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { CheckCircle, Target, Users, Brain, BarChart3, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const phases = [
    {
      icon: Target,
      title: "Phase 1 - Audit individuel",
      duration: "1h par commercial",
      description: "Point individuel pour auditer l'organisation, évaluer la méthodologie et diagnostiquer l'état d'esprit de chaque commercial.",
      highlights: ["Gestion du temps et priorisation", "Structure d'entretien", "Mindset commercial"]
    },
    {
      icon: Users,
      title: "Phase 2 - Audit collectif",
      duration: "4h",
      description: "Analyse des pratiques actuelles de prospection et décortiquage des entretiens de vente pour identifier les axes d'amélioration.",
      highlights: ["Pratiques de prospection", "Entretiens de vente", "Points de friction"]
    },
    {
      icon: Brain,
      title: "Phase 3 - Structuration stratégique",
      duration: "16h asynchrone",
      description: "Création du Sales Playbook complet et mise en place de l'agent GPT d'autocoaching pour l'élévation continue.",
      highlights: ["Sales Playbook", "Agent GPT-IA", "Scripts optimisés"]
    },
    {
      icon: BarChart3,
      title: "Phase 4 - Restitution stratégique",
      duration: "4h",
      description: "Présentation du plan de vente finalisé et démonstration de l'agent GPT pour formaliser les plans d'action.",
      highlights: ["Plan de vente", "Agent IA", "Plans d'action"]
    },
    {
      icon: TrendingUp,
      title: "Phase 5 - Implémentation continue",
      duration: "2 sessions/pers.",
      description: "Coaching individuel pour accompagner la mise en œuvre terrain et favoriser la montée en compétence.",
      highlights: ["Mise en œuvre terrain", "Adaptation en temps réel", "Montée en compétence"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Notre processus unique
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Le Bootcamp Laurent Serre Développement : un programme révolutionnaire 
            qui combine expertise humaine et intelligence artificielle pour transformer 
            vos performances commerciales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8 mb-16 items-center"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 w-full max-w-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <phase.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
                  <p className="text-sm text-blue-600 font-medium">{phase.duration}</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {phase.description}
              </p>
              
              <ul className="space-y-2">
                {phase.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-mint-green to-blue-ink rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Performance = Activité × Compétence
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Le premier programme à permettre un suivi objectif des commerciaux 
            avec alignement continu et résultats mesurables.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4 950€</div>
              <div className="text-sm opacity-80">H.T. pour 6 personnes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">29h</div>
              <div className="text-sm opacity-80">de formation intensive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">personnalisé</div>
            </div>
          </div>

          <a 
            href="#contact" 
            className="inline-block bg-white text-mint-green border-2 border-mint-green hover:bg-mint-green hover:text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Démarrer votre transformation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 