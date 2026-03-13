import { motion } from 'motion/react';

export function Steps() {
  const steps = [
    {
      number: '01',
      title: 'Agenda tu demo gratuita',
      description: 'Déjanos tus datos y un especialista te mostrará cómo ELEVATE puede adaptarse a tu empresa.',
    },
    {
      number: '02',
      title: 'Personaliza tu suite',
      description: 'Selecciona los módulos que mejor se adapten a tus procesos: RRHH, Inventarios, Finanzas, Seguridad y más.',
    },
    {
      number: '03',
      title: 'Activa y transforma tu gestión',
      description: 'Digitaliza tu empresa y mide resultados desde el día uno.',
    },
  ];

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Tu transformación digital empieza aquí: 3 pasos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Olvídate de procesos largos y complicados. Con ELEVATE, tu empresa se digitaliza y empieza a ver resultados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/50 to-purple-500/20 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center elevate-panel px-6 py-8"
            >
              <div className="w-24 h-24 rounded-full bg-[#111] border-2 border-indigo-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(79,70,229,0.2)]">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
