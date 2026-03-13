import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import appStoreBadge from '../images/appstore.svg';
import playStoreBadge from '../images/playstore.svg';

export function CTA() {
  return (
    <section id="contacto" className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight"
        >
          ¿Preparado para hacer{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            evolucionar tu empresa?
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Forma parte de la comunidad empresarial ELEVATE y empieza a digitalizar tus procesos hoy mismo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#contacto"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] group"
          >
            Solicita una demo gratuita
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <a
            href="#"
            className="rounded-2xl bg-white px-6 py-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
            aria-label="Disponible en App Store"
          >
            <img src={appStoreBadge} alt="Disponible en App Store" className="h-12 w-auto object-contain" />
            <span className="text-indigo-600 font-semibold text-sm md:text-base">
              Available on the App Store
            </span>
          </a>
          <a
            href="#"
            className="rounded-2xl bg-white px-6 py-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
            aria-label="Disponible en Google Play"
          >
            <img src={playStoreBadge} alt="Disponible en Google Play" className="h-12 w-auto object-contain" />
            <span className="text-indigo-600 font-semibold text-sm md:text-base">
              Android app on Google Play
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
