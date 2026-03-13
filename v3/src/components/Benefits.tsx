import { motion } from 'motion/react';
import { Settings, TrendingUp, ShieldCheck } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      title: 'Automatiza todo',
      description: 'Optimiza y conecta procesos administrativos, operativos y de RRHH en un solo lugar.',
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      color: 'from-blue-500/20 to-blue-600/5',
    },
    {
      title: 'Escala a tu ritmo',
      description: 'Comienza con lo esencial y crece según tus necesidades empresariales.',
      icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
      color: 'from-indigo-500/20 to-indigo-600/5',
    },
    {
      title: 'Más control y seguridad',
      description: 'Cumple normativas, asegura trazabilidad y reduce errores.',
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500/20 to-purple-600/5',
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            ¿Tu empresa sigue gestionando procesos de forma manual y lenta?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Más que una plataforma, ELEVATE es el aliado digital que impulsa eficiencia, control y crecimiento en tu empresa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-2xl border border-white/10 bg-[#111] p-8 hover:bg-[#151515] transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none`}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <a href="#productos" className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                  Ver más <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
