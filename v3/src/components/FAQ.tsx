import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: '¿En qué sectores se puede implementar SUITE ELEVATE?',
      a: 'SUITE ELEVATE es altamente adaptable y se puede implementar en diversos sectores como empresas de servicios, industria, retail, recursos humanos, entre otros.',
    },
    {
      q: '¿Qué tipo de empresas pueden usar SUITE ELEVATE?',
      a: 'Desde pequeñas empresas que buscan digitalizar sus primeros procesos hasta grandes corporaciones que necesitan un ecosistema integrado para toda su operación.',
    },
    {
      q: '¿Puedo elegir sólo algunos módulos o debo implementarlos todos?',
      a: 'Nuestra suite es completamente modular. Puedes comenzar con los módulos que resuelvan tus necesidades más urgentes y escalar agregando más aplicaciones conforme tu empresa crezca.',
    },
    {
      q: '¿Cómo puedo obtener más información o empezar a utilizar SUITE ELEVATE?',
      a: 'Puedes solicitar una demo gratuita a través de nuestro formulario de contacto. Un especialista se pondrá en contacto contigo para entender tus necesidades y mostrarte cómo ELEVATE puede ayudarte.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="consultas" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Resolvemos tus dudas sobre la implementación y uso de ELEVATE.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="elevate-panel overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.q}</span>
                <ChevronDown
                  className={`w-6 h-6 text-indigo-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
