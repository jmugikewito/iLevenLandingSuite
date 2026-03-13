import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ClipboardList, CalendarDays, MessageSquare, DollarSign, Receipt, Package, Activity, Boxes, UserCheck, FileText } from 'lucide-react';

export function Products() {
  const products = [
    { id: 'QUEST', name: 'Cuestionarios y Encuestas', desc: 'Mide la satisfaccion, mejora decisiones de RRHH e identifica areas de mejora.', icon: <ClipboardList className="w-6 h-6" /> },
    { id: 'EVE', name: 'Eventos Corporativos', desc: 'Monitorea asistencia, centraliza logistica y reduce errores.', icon: <CalendarDays className="w-6 h-6" /> },
    { id: 'BUZ', name: 'Buzon de Sugerencias', desc: 'Fomenta la mejora continua y gestiona reclamos de forma anonima.', icon: <MessageSquare className="w-6 h-6" /> },
    { id: 'BUD', name: 'Control Presupuestal', desc: 'Visibilidad en tiempo real y deteccion de desviaciones por proyecto.', icon: <DollarSign className="w-6 h-6" /> },
    { id: 'DGA', name: 'Declaracion de Gastos', desc: 'Simplifica el proceso, registra comprobantes y asegura politicas de gasto.', icon: <Receipt className="w-6 h-6" /> },
    { id: 'EMAT', name: 'Entrega de Materiales', desc: 'Optimiza inventario, garantiza trazabilidad y reduce perdidas.', icon: <Package className="w-6 h-6" /> },
    { id: 'GOP', name: 'Gestion de Procesos', desc: 'Seguimiento de procesos clave, mejora la organizacion y reduce errores.', icon: <Activity className="w-6 h-6" /> },
    { id: 'INV', name: 'Inventarios', desc: 'Controla ingresos/egresos, mejora la rotacion y minimiza faltantes.', icon: <Boxes className="w-6 h-6" /> },
    { id: 'CVI', name: 'Control de Visitas', desc: 'Mayor seguridad, un registro completo y gestion de autorizaciones.', icon: <UserCheck className="w-6 h-6" /> },
    { id: 'DOC', name: 'Gestion Documental', desc: 'Centraliza archivos, controla ediciones y facilita auditorias.', icon: <FileText className="w-6 h-6" /> },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (direction: 1 | -1) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const amount = Math.max(slider.clientWidth * 0.85, 320);
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
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="productos" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Todos tus procesos, en un mismo ecosistema
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Gestiona, controla y haz crecer tu empresa desde una unica plataforma modular. Descubre como cada solucion de ELEVATE impulsa la productividad, la seguridad y la eficiencia de tu negocio.
          </motion.p>
        </div>

        <div className="flex justify-end gap-3 mb-6">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="w-10 h-10 rounded-full border border-[#304FFE]/70 bg-[#0c1333] text-gray-200 hover:text-white hover:border-[#6E7CFF] transition-colors flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="w-10 h-10 rounded-full border border-[#304FFE]/70 bg-[#0c1333] text-gray-200 hover:text-white hover:border-[#6E7CFF] transition-colors flex items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="min-w-[280px] md:min-w-[330px] snap-start primary-surface p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#304FFE]/60 bg-[#304FFE]/20 text-indigo-200">
                  {product.icon}
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-indigo-200/80 uppercase">{product.id}</span>
                  <h3 className="text-lg font-semibold text-white leading-tight">{product.name}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-200/85 flex-grow mb-6">
                {product.desc}
              </p>
              <a href="#contacto" className="mt-auto inline-flex items-center text-sm font-medium text-indigo-100 hover:text-white transition-colors group/link">
                Ver mas <span className="ml-1 group-hover/link:translate-x-1 transition-transform">-></span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
