import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Blocks,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  ScanSearch,
  Sparkles,
  Wrench,
} from 'lucide-react';
import moldImage from '../images/mold.png';
import rigidoImage from '../images/rigido.png';

const benefits = [
  {
    title: 'Entendemos tu proceso real',
    description:
      'Antes de proponer tecnologia, analizamos como opera tu empresa y donde estan hoy tus verdaderos cuellos de botella.',
    icon: <ScanSearch className="w-7 h-7 text-cyan-300" />,
    color: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    accent: 'bg-cyan-500/10',
  },
  {
    title: 'El software se adapta a tu negocio',
    description:
      'No forzamos a tu equipo a encajar en un sistema rigido. Disenamos herramientas que respetan tu forma de trabajar.',
    icon: <Blocks className="w-7 h-7 text-indigo-300" />,
    color: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    accent: 'bg-indigo-500/10',
  },
  {
    title: 'Detectamos oportunidades de mejora',
    description:
      'Convertimos friccion operativa en automatizacion, visibilidad y decisiones mas rapidas para cada area critica.',
    icon: <Sparkles className="w-7 h-7 text-fuchsia-300" />,
    color: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
    accent: 'bg-fuchsia-500/10',
  },
  {
    title: 'Construimos herramientas utiles',
    description:
      'Cada modulo, flujo y panel se disena para resolver necesidades concretas, no para llenar una lista generica de funciones.',
    icon: <Wrench className="w-7 h-7 text-amber-300" />,
    color: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accent: 'bg-amber-500/10',
  },
  {
    title: 'Evoluciona contigo',
    description:
      'Tu sistema crece con tu empresa. Ajustamos procesos, agregamos capacidades y mejoramos la operacion con el tiempo.',
    icon: <GitBranch className="w-7 h-7 text-emerald-300" />,
    color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accent: 'bg-emerald-500/10',
  },
];

export function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [featurePanelIndex, setFeaturePanelIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % benefits.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFeaturePanelIndex((current) => (current + 1) % 2);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const visibleCards = Array.from({ length: 3 }, (_, offset) => {
    return benefits[(activeIndex + offset) % benefits.length];
  });

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + benefits.length) % benefits.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % benefits.length);
  };

  return (
    <section id="beneficios" className="py-24 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-12 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-sm font-medium text-cyan-200 mb-6"
          >
            Tecnologia que se adapta a tu negocio. No al reves.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            El software debe adaptarse a tu negocio.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300">
              No tu negocio al software.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 leading-relaxed text-justify"
          >
            Llevamos mas de 8 anos disenando soluciones tecnologicas para empresas que necesitan algo mas que un sistema estandar.
            Analizamos tu operacion, entendemos tu negocio y construimos herramientas que evolucionan con tu empresa.
          </motion.p>
        </div>

        <div className="mb-12 min-h-[760px]">
          <AnimatePresence mode="wait">
            {featurePanelIndex === 0 ? (
              <motion.div
                key="skills-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="elevate-panel h-full min-h-[760px] p-8 md:p-10 overflow-hidden"
              >
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80 mb-4">Nuestras habilidades</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight w-full mb-6">
                    No vendemos software. Construimos herramientas que evolucionan con tu empresa.
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-justify w-full mb-8">
                    Nuestro enfoque es simple: entender tu proceso real, identificar oportunidades de mejora, disenar herramientas a tu medida y evolucionarlas junto con tu crecimiento.
                  </p>

                  <div className="relative mx-auto w-fit max-w-full rounded-[28px] border border-white/8 bg-white/4 px-6 py-8 md:px-8 overflow-hidden">
                    <div className="absolute left-1/2 top-16 bottom-10 w-px bg-gradient-to-b from-cyan-300/70 via-cyan-400/40 to-transparent -translate-x-1/2" />
                    <div className="relative flex flex-col items-center">
                      <div className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100">
                        Nosotros
                      </div>
                      <div className="w-px h-8 bg-cyan-300/60" />
                      <div className="grid grid-cols-1 gap-4 w-fit max-w-full">
                        {[
                          'Entender tu proceso real',
                          'Identificar oportunidades de mejora',
                          'Disenar herramientas para tu operacion',
                          'Evolucionar el sistema junto con tu crecimiento',
                        ].map((item) => (
                          <div key={item} className="relative mx-auto w-fit max-w-full">
                            <div className="absolute left-1/2 -top-4 h-4 w-px bg-cyan-300/50 -translate-x-1/2" />
                            <div className="rounded-2xl border border-cyan-400/15 bg-[#0d1426]/85 px-5 py-4 text-sm text-gray-200 text-center shadow-[0_10px_30px_rgba(3,6,18,0.2)] whitespace-nowrap">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="strategy-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="elevate-panel h-full min-h-[760px] p-8 md:p-10 overflow-hidden"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <p className="text-sm uppercase tracking-[0.24em] text-indigo-200/80 mb-4">Nuestra estrategia</p>
                  <h3 className="text-2xl font-semibold text-white mb-3 w-full">Software moldeable</h3>
                  <p className="text-gray-300 leading-relaxed text-justify mb-8 w-full">
                    Mientras otros sistemas intentan forzar tu operacion, nosotros moldeamos la tecnologia alrededor de tu realidad.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-start">
                    <div className="rounded-[32px] border border-red-400/20 bg-gradient-to-b from-red-500/10 to-white/5 p-7 min-h-[420px] flex flex-col justify-start">
                      <span className="text-xs uppercase tracking-[0.2em] text-red-200/70">Rigido</span>
                      <div className="mx-auto my-6 w-full max-w-[320px] h-[300px] rounded-[34px] border border-red-300/25 bg-red-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
                        <img src={rigidoImage} alt="Software rigido" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed text-justify">
                        Un bloque cerrado intentando encajar en procesos que no fueron disenados para el.
                      </p>
                    </div>

                    <div className="flex items-center justify-center pt-28">
                      <div className="w-16 h-16 rounded-full border border-cyan-300/20 bg-cyan-400/10 flex items-center justify-center text-cyan-200">
                        <ArrowRight className="w-7 h-7" />
                      </div>
                    </div>

                    <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-b from-cyan-500/15 to-white/5 p-7 min-h-[420px] flex flex-col justify-start">
                      <span className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">Moldeable</span>
                      <div className="mx-auto my-6 relative w-full max-w-[360px] h-[300px] flex items-center justify-center">
                        <div className="absolute inset-0 rounded-[42%_58%_55%_45%/46%_40%_60%_54%] border border-cyan-200/20 bg-cyan-400/10" />
                        <div className="absolute inset-1 rounded-[56%_44%_42%_58%/50%_58%_42%_50%] bg-indigo-400/10 blur-sm" />
                        <div className="absolute inset-0 rounded-[46%_54%_48%_52%/52%_44%_56%_48%] overflow-hidden border border-cyan-200/15">
                          <img src={moldImage} alt="Software moldeable" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed text-justify">
                        Tecnologia que se amolda a tus flujos, tus tiempos y la complejidad real de tu negocio.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-gray-500 mb-3">Nuestros de beneficios</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Una capa tecnologica que trabaja como extension inteligente de tu empresa
            </h3>
            <p className="text-gray-400 leading-relaxed text-justify">
              Recorre los principios que usamos para convertir procesos reales en soluciones utiles, flexibles y escalables.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="Ver beneficios anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
              aria-label="Ver siguientes beneficios"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {visibleCards.map((benefit) => (
              <article key={benefit.title} className="relative group elevate-panel p-8 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-80 pointer-events-none`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.accent} border border-white/10 flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{benefit.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-justify">{benefit.description}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-8">
          {benefits.map((benefit, index) => (
            <button
              key={benefit.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? 'w-10 bg-indigo-300' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Mostrar beneficio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
