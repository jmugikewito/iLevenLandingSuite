import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function Hero() {
  const highlights = ['Suite modular', 'Implementacion guiada', 'Escalable por etapas'];

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-ms text-indigo-300 font-medium mb-8"
          >
            <span className="flex h-3 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            La suite empresarial modular que evoluciona contigo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
          >
            Digitaliza y automatiza{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              todos tus procesos
            </span>{' '}
            en una sola plataforma.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Informes, equipos y operaciones en tiempo real. Más de 100 empresas han transformado su gestión con ELEVATE, reduciendo costos y acelerando decisiones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] group"
            >
              Comienza ahora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#casos_de_uso"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <PlayCircle size={20} className="text-indigo-400" />
              Ver casos de uso
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-2"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-gray-200"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-[#111]/80 backdrop-blur-xl p-2 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/20">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden">
              {/* Mockup UI Elements */}
              <div className="absolute inset-0 p-6 grid grid-cols-12 gap-6">
                {/* Sidebar */}
                <div className="col-span-3 hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
                  <div className="h-8 w-32 bg-white/5 rounded-md mb-4"></div>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-6 w-full bg-white/5 rounded-md"></div>
                  ))}
                </div>
                {/* Main Content */}
                <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="h-8 w-48 bg-white/5 rounded-md"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-white/5 rounded-full"></div>
                      <div className="h-8 w-8 bg-white/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                        <div className="h-4 w-16 bg-white/10 rounded"></div>
                        <div className="h-8 w-24 bg-white/20 rounded"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="h-full w-full bg-gradient-to-t from-indigo-500/20 to-transparent rounded-lg relative">
                      {/* Chart line mock */}
                      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="rgba(99, 102, 241, 0.1)" />
                        <path d="M0,50 Q25,20 50,60 T100,30" fill="none" stroke="rgba(99, 102, 241, 0.8)" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
