import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type StackItem = {
  name: string;
  description: string;
  iconUrl: string;
};

const stack: StackItem[] = [
  {
    name: 'React',
    description: 'Construimos interfaces rápidas y mantenibles para experiencias modernas.',
    iconUrl: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    name: 'TypeScript',
    description: 'Tipado estático para más calidad, escalabilidad y menos errores.',
    iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6',
  },
  {
    name: 'Vite',
    description: 'Build y desarrollo ultrarrápido para mejorar tiempos de entrega.',
    iconUrl: 'https://cdn.simpleicons.org/vite/646CFF',
  },
  {
    name: 'Tailwind CSS',
    description: 'Sistema de estilos consistente para UI adaptable y elegante.',
    iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'Node.js',
    description: 'Servicios backend eficientes para lógica de negocio y APIs.',
    iconUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  },
  {
    name: 'Express',
    description: 'Arquitectura API simple y robusta para exponer servicios empresariales.',
    iconUrl: 'https://cdn.simpleicons.org/express/FFFFFF',
  },
  {
    name: 'SQLite',
    description: 'Persistencia confiable y ligera para operaciones internas.',
    iconUrl: 'https://cdn.simpleicons.org/sqlite/003B57',
  },
  {
    name: 'Google AI',
    description: 'Automatización y capacidades inteligentes para decisiones más rápidas.',
    iconUrl: 'https://cdn.simpleicons.org/google/4285F4',
  },
];

export function TechStack() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (direction: 1 | -1) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const amount = Math.max(slider.clientWidth * 0.85, 300);
    slider.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const nearEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 40;
      if (nearEnd) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }
      scrollByCards(1);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stack" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Nuestro stack tecnológico
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Tecnologías que usamos para construir soluciones estables, escalables y listas para crecer con tu empresa.
          </motion.p>
        </div>

        <div className="flex justify-end gap-3 mb-6">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {stack.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="min-w-[280px] md:min-w-[320px] snap-start rounded-2xl border border-white/10 bg-[#111] p-6 hover:bg-[#151515] hover:border-white/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <img src={item.iconUrl} alt={item.name} className="w-8 h-8 object-contain" loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
