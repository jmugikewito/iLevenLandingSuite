import { motion } from 'motion/react';
import { ArrowUpRight, Building2 } from 'lucide-react';

type CaseStudy = {
  company: string;
  segment: string;
  outcome: string;
  quote: string;
  role: string;
};

const cases: CaseStudy[] = [
  {
    company: 'Cliente Retail (reemplazar nombre)',
    segment: 'Retail multi-sede',
    outcome: '-28% de tiempo operativo en tareas administrativas',
    quote:
      'Con ELEVATE unificamos procesos que antes estaban dispersos y mejoramos la velocidad de respuesta del equipo.',
    role: 'Gerencia de Operaciones',
  },
  {
    company: 'Cliente Industrial (reemplazar nombre)',
    segment: 'Industria y logistica',
    outcome: '+42% en trazabilidad de entregas internas',
    quote:
      'Pasamos de reportes reactivos a control en tiempo real para inventarios, materiales y flujos criticos.',
    role: 'Jefatura de Planta',
  },
  {
    company: 'Cliente Servicios (reemplazar nombre)',
    segment: 'Servicios corporativos',
    outcome: '-35% en tiempos de aprobacion y gestion documental',
    quote:
      'El cambio fue inmediato: mejor control, menos friccion y decisiones mucho mas rapidas en las areas clave.',
    role: 'Direccion Administrativa',
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative border-t border-white/5 bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Casos de impacto medible
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Esta seccion ya queda preparada para publicar testimonios reales de tus clientes con su logo, nombre y metricas verificables.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="elevate-panel group flex h-full flex-col p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-indigo-200">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.company}</h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-gray-400">{item.segment}</p>
                  </div>
                </div>
                <ArrowUpRight className="text-indigo-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
              </div>

              <p className="mb-5 rounded-xl border border-emerald-300/15 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-200">
                Resultado: {item.outcome}
              </p>

              <p className="mb-6 flex-grow leading-relaxed text-gray-300">"{item.quote}"</p>

              <p className="text-sm font-medium text-indigo-300">{item.role}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contacto-form"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Quiero publicar mi caso con ELEVATE
          </a>
        </div>
      </div>
    </section>
  );
}
