import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Shayna John',
      role: 'Directora de Operaciones',
      quote: 'ELEVATE ha transformado por completo la forma en que gestionamos nuestros procesos. La automatización nos ha ahorrado incontables horas.',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    },
    {
      name: 'Alexis Shane Den',
      role: 'Gerente de RRHH',
      quote: 'La implementación fue sorprendentemente sencilla. Ahora tenemos visibilidad total sobre el desempeño y bienestar de nuestro equipo.',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
      name: 'Angel Sánchez',
      role: 'CEO',
      quote: 'La mejor decisión tecnológica que hemos tomado. La suite modular nos permitió empezar pequeño y escalar a medida que crecíamos.',
      image: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Descubre cómo empresas líderes están impulsando su crecimiento con ELEVATE.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative elevate-panel p-8 flex flex-col h-full"
            >
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-indigo-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed italic flex-grow">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
