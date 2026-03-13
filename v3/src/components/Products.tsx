import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  Boxes,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  DollarSign,
  FileText,
  MessageSquare,
  Package,
  Receipt,
  UserCheck,
} from 'lucide-react';

const products = [
  {
    id: 'QUEST',
    shortName: 'QUEST',
    fullName: 'Cuestionarios y Encuestas',
    summary: 'Mide la satisfaccion, fortalece decisiones de RRHH e identifica oportunidades reales de mejora.',
    logo: <ClipboardList className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'EVE',
    shortName: 'EVE',
    fullName: 'Eventos Corporativos',
    summary: 'Monitorea asistencia, centraliza la logistica y mejora la coordinacion de cada actividad interna.',
    logo: <CalendarDays className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'BUZ',
    shortName: 'BUZ',
    fullName: 'Buzon de Sugerencias',
    summary: 'Fomenta la mejora continua y canaliza reclamos o propuestas con orden, trazabilidad y confianza.',
    logo: <MessageSquare className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'BUD',
    shortName: 'BUD',
    fullName: 'Control Presupuestal',
    summary: 'Obtiene visibilidad financiera en tiempo real y detecta desviaciones antes de que impacten el negocio.',
    logo: <DollarSign className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'DGA',
    shortName: 'DGA',
    fullName: 'Declaracion de Gastos',
    summary: 'Simplifica rendiciones, registra comprobantes y asegura el cumplimiento de politicas de gasto.',
    logo: <Receipt className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'EMAT',
    shortName: 'EMAT',
    fullName: 'Entrega de Materiales',
    summary: 'Optimiza inventario, garantiza trazabilidad en entregas y reduce perdidas operativas.',
    logo: <Package className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'GOP',
    shortName: 'GOP',
    fullName: 'Gestion de Procesos',
    summary: 'Orquesta procesos clave con seguimiento claro, menos errores y una mejor coordinacion interna.',
    logo: <Activity className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'INV',
    shortName: 'INV',
    fullName: 'Inventarios',
    summary: 'Controla ingresos y egresos, mejora la rotacion y minimiza faltantes en toda la operacion.',
    logo: <Boxes className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'CVI',
    shortName: 'CVI',
    fullName: 'Control de Visitas',
    summary: 'Refuerza la seguridad con registro completo, autorizaciones y visibilidad en tiempo real.',
    logo: <UserCheck className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
  {
    id: 'DOC',
    shortName: 'DOC',
    fullName: 'Gestion Documental',
    summary: 'Centraliza archivos, controla versiones y facilita auditorias sin perder tiempo buscando informacion.',
    logo: <FileText className="w-16 h-16" strokeWidth={1.6} />,
    href: '',
  },
];

export function Products() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % products.length);
  };

  const getProductAt = (offset: number) => {
    return products[(activeIndex + offset + products.length) % products.length];
  };

  const visibleProducts = [
    { product: getProductAt(-1), position: 'left' as const },
    { product: getProductAt(0), position: 'center' as const },
    { product: getProductAt(1), position: 'right' as const },
  ];

  return (
    <section id="productos" className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Gestiona, controla y haz crecer tu empresa desde una unica plataforma modular. Descubre como cada solucion de ELEVATE impulsa productividad, seguridad y eficiencia.
          </motion.p>
        </div>

        <div className="flex justify-end gap-3 mb-8">
          <button
            type="button"
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full border border-[#304FFE]/70 bg-[#0c1333] text-gray-200 hover:text-white hover:border-[#6E7CFF] transition-colors flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-[#304FFE]/70 bg-[#0c1333] text-gray-200 hover:text-white hover:border-[#6E7CFF] transition-colors flex items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="relative min-h-[640px] md:min-h-[620px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
            >
              {visibleProducts.map(({ product, position }) => {
                const isCenter = position === 'center';

                return (
                  <motion.a
                    key={`${position}-${product.id}`}
                    href={product.href}
                    whileHover={{ y: -6 }}
                    className={`group relative flex flex-col rounded-[30px] border p-8 md:p-10 overflow-hidden text-left ${
                      isCenter
                        ? 'primary-surface min-h-[560px] lg:scale-[1.02]'
                        : 'elevate-panel min-h-[520px] border-white/10'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 pointer-events-none ${
                        isCenter
                          ? 'bg-gradient-to-b from-white/8 via-transparent to-transparent'
                          : 'bg-gradient-to-b from-white/5 via-transparent to-transparent'
                      }`}
                    />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-8 text-center">
                        <span
                          className={`inline-flex rounded-full px-4 py-2 text-xs font-bold tracking-[0.32em] uppercase mx-auto ${
                            isCenter
                              ? 'bg-white/10 text-indigo-100 border border-white/10'
                              : 'bg-white/5 text-indigo-200/80 border border-white/8'
                          }`}
                        >
                          {product.shortName}
                        </span>
                      </div>

                      <div className="mb-8 text-center">
                        <h3 className={`font-semibold leading-tight text-center ${isCenter ? 'text-3xl text-white' : 'text-2xl text-white'}`}>
                          {product.fullName}
                        </h3>
                      </div>

                      <div
                        className={`mb-10 flex items-center justify-center rounded-[28px] border ${
                          isCenter
                            ? 'min-h-[220px] border-[#6E7CFF]/40 bg-[#304FFE]/18 text-indigo-100'
                            : 'min-h-[200px] border-white/10 bg-white/5 text-indigo-200'
                        }`}
                      >
                        {product.logo}
                      </div>

                      <p className={`mt-auto leading-relaxed text-center ${isCenter ? 'text-base text-gray-100/92' : 'text-base text-gray-300'}`}>
                        {product.summary}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? 'w-10 bg-indigo-300' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Mostrar producto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
