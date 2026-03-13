import { motion } from 'motion/react';
import { Briefcase, Factory, ShoppingBag, Users } from 'lucide-react';

export function UseCases() {
  const cases = [
    {
      title: 'Empresas de Servicios',
      description: 'Optimiza la gestión de clientes, contratos y facturación.',
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      bg: 'bg-blue-500/10',
    },
    {
      title: 'Industria',
      description: 'Controla inventarios, producción y seguridad en planta.',
      icon: <Factory className="w-8 h-8 text-indigo-400" />,
      bg: 'bg-indigo-500/10',
    },
    {
      title: 'Retail',
      description: 'Mejora la trazabilidad de productos, ventas y logística.',
      icon: <ShoppingBag className="w-8 h-8 text-purple-400" />,
      bg: 'bg-purple-500/10',
    },
    {
      title: 'Recursos Humanos',
      description: 'Eleva la productividad y la satisfacción de tu equipo.',
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      bg: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="casos_de_uso" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
            >
              Una solución, múltiples aplicaciones
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400 mb-8"
            >
              SUITE ELEVATE se adapta a las necesidades de cualquier industria. Descubre cómo ayudamos a empresas como la tuya a alcanzar su máximo potencial.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Explorar todos los casos
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#111] p-6 hover:bg-[#151515] transition-colors"
              >
                <div className={`w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
