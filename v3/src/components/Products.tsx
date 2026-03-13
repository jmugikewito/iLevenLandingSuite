import { motion } from 'motion/react';
import { ClipboardList, CalendarDays, MessageSquare, DollarSign, Receipt, Package, Activity, Boxes, UserCheck, FileText } from 'lucide-react';

export function Products() {
  const products = [
    { id: 'QUEST', name: 'Cuestionarios y Encuestas', desc: 'Mide la satisfacción, mejora decisiones de RRHH e identifica áreas de mejora.', icon: <ClipboardList className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { id: 'EVE', name: 'Eventos Corporativos', desc: 'Monitorea asistencia, centraliza logística y reduce errores.', icon: <CalendarDays className="w-6 h-6" />, color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
    { id: 'BUZ', name: 'Buzón de Sugerencias', desc: 'Fomenta la mejora continua y gestiona reclamos de forma anónima.', icon: <MessageSquare className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    { id: 'BUD', name: 'Control Presupuestal', desc: 'Visibilidad en tiempo real y detección de desviaciones por proyecto.', icon: <DollarSign className="w-6 h-6" />, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    { id: 'DGA', name: 'Declaración de Gastos', desc: 'Simplifica el proceso, registra comprobantes y asegura políticas de gasto.', icon: <Receipt className="w-6 h-6" />, color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
    { id: 'EMAT', name: 'Entrega de Materiales', desc: 'Optimiza inventario, garantiza trazabilidad y reduce pérdidas.', icon: <Package className="w-6 h-6" />, color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    { id: 'GOP', name: 'Gestión de Procesos', desc: 'Seguimiento de procesos clave, mejora la organización y reduce errores.', icon: <Activity className="w-6 h-6" />, color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
    { id: 'INV', name: 'Inventarios', desc: 'Controla ingresos/egresos, mejora la rotación y minimiza faltantes.', icon: <Boxes className="w-6 h-6" />, color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    { id: 'CVI', name: 'Control de Visitas', desc: 'Mayor seguridad, un registro completo y gestión de autorizaciones.', icon: <UserCheck className="w-6 h-6" />, color: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
    { id: 'DOC', name: 'Gestión Documental', desc: 'Centraliza archivos, controla ediciones y facilita auditorías.', icon: <FileText className="w-6 h-6" />, color: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
  ];

  return (
    <section id="productos" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            Gestiona, controla y haz crecer tu empresa desde una única plataforma modular. Descubre cómo cada solución de ELEVATE impulsa la productividad, la seguridad y la eficiencia de tu negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-[#111] p-6 hover:bg-[#151515] hover:border-white/20 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${product.color} group-hover:scale-110 transition-transform`}>
                  {product.icon}
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">{product.id}</span>
                  <h3 className="text-lg font-semibold text-white leading-tight">{product.name}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-400 flex-grow mb-6">
                {product.desc}
              </p>
              <a href="#contacto" className="mt-auto inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors group/link">
                Ver más <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
