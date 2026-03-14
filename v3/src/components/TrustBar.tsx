import { motion } from 'motion/react';

const trustedBy = [
  'Empresas de Servicios',
  'Industria y Operaciones',
  'Retail y Logistica',
  'Recursos Humanos',
  'Equipos Administrativos',
  'Gestores Financieros',
];

const proofStats = [
  { value: '+100', label: 'Empresas acompanadas' },
  { value: '10', label: 'Modulos en la suite ELEVATE' },
  { value: '3', label: 'Pasos para iniciar' },
];

export function TrustBar() {
  return (
    <section id="clientes" className="border-t border-white/5 bg-[#070707] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-center text-sm uppercase tracking-[0.22em] text-gray-400"
        >
          Equipos que confian en un enfoque modular y escalable
        </motion.p>

        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {trustedBy.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center text-xs font-semibold uppercase tracking-[0.08em] text-gray-200"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {proofStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="elevate-panel p-5 text-center"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
