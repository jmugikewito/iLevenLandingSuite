import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import appStoreBadge from '../images/appstore.svg';
import ilevenBanner from '../images/ileven_grid.svg';
import playStoreBadge from '../images/playstore.svg';
import { buildWhatsAppUrl, siteConfig } from '../config/site';

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    challenge: '',
  });

  const [error, setError] = useState<string | null>(null);

  const whatsappUrl = useMemo(() => {
    const lines = [
      'Hola equipo ELEVATE, quiero una demo.',
      `Nombre: ${formData.name || '-'}`,
      `Empresa: ${formData.company || '-'}`,
      `Cargo: ${formData.role || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Telefono: ${formData.phone || '-'}`,
      `Reto principal: ${formData.challenge || '-'}`,
    ];
    return buildWhatsAppUrl(lines.join('\n'));
  }, [formData]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.challenge) {
      setError('Completa nombre, empresa, email y reto principal para continuar.');
      return;
    }
    setError(null);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const onChange =
    (key: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [key]: event.target.value }));
    };

  return (
    <section id="contacto" className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight"
        >
          ¿Preparado para hacer{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            evolucionar tu empresa?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Forma parte de la comunidad empresarial ELEVATE y empieza a digitalizar tus procesos hoy mismo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#contacto-form"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] group"
          >
            Agendar demo ahora
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.form
          id="contacto-form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mx-auto mb-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 text-left"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-indigo-200/80">Solicitud de demo</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Nombre completo*</span>
              <input value={formData.name} onChange={onChange('name')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-400" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Empresa*</span>
              <input value={formData.company} onChange={onChange('company')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-400" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Cargo</span>
              <input value={formData.role} onChange={onChange('role')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-400" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Correo corporativo*</span>
              <input type="email" value={formData.email} onChange={onChange('email')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-400" />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm text-gray-300">Telefono</span>
              <input value={formData.phone} onChange={onChange('phone')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-400" />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm text-gray-300">Cual es tu principal reto operativo hoy?*</span>
              <textarea rows={4} value={formData.challenge} onChange={onChange('challenge')} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-400" />
            </label>
          </div>

          {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-blue-500 hover:to-indigo-500">
              Enviar por WhatsApp
            </button>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent('Solicitud de demo ELEVATE')}`}
              className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white/90 transition hover:bg-white/5"
            >
              Enviar por email
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">Al enviar, autorizas ser contactado por el equipo comercial de ELEVATE.</p>
        </motion.form>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="text-sm md:text-base text-gray-500 mb-10"
        >
          O busca nuestras versiones al mercado publico en general
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <a
            href={buildWhatsAppUrl('Hola, quiero recibir acceso a la app iOS de ELEVATE.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl px-6 py-4 flex items-center justify-center gap-3 transition-all border border-[#304FFE]/80 bg-[radial-gradient(circle_at_top_left,_rgba(48,79,254,0.42),_rgba(6,10,30,0.94)_62%)] hover:border-[#6E7CFF] hover:shadow-[0_0_26px_rgba(48,79,254,0.30)] focus-visible:border-[#8EA0FF] focus-visible:shadow-[0_0_32px_rgba(48,79,254,0.42)] outline-none"
            aria-label="Disponible en App Store"
          >
            <img
              src={appStoreBadge}
              alt="Disponible en App Store"
              className="h-20 w-auto object-contain transition-transform duration-300 group-focus-visible:scale-105 group-focus-visible:animate-pulse"
            />
            <span className="text-white text-left leading-tight">
              <span className="block text-[11px] md:text-xs font-medium tracking-wide text-white/85">Available on the</span>
              <span className="block text-sm md:text-base font-bold uppercase">APP STORE</span>
            </span>
          </a>
          <a
            href={buildWhatsAppUrl('Hola, quiero recibir acceso a la app Android de ELEVATE.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl px-6 py-4 flex items-center justify-center gap-3 transition-all border border-[#304FFE]/80 bg-[radial-gradient(circle_at_top_left,_rgba(48,79,254,0.42),_rgba(6,10,30,0.94)_62%)] hover:border-[#6E7CFF] hover:shadow-[0_0_26px_rgba(48,79,254,0.30)] focus-visible:border-[#8EA0FF] focus-visible:shadow-[0_0_32px_rgba(48,79,254,0.42)] outline-none"
            aria-label="Disponible en Google Play"
          >
            <img
              src={playStoreBadge}
              alt="Disponible en Google Play"
              className="h-20 w-auto object-contain transition-transform duration-300 group-focus-visible:scale-105 group-focus-visible:animate-pulse"
            />
            <span className="text-white text-left leading-tight">
              <span className="block text-[11px] md:text-xs font-medium tracking-wide text-white/85">Available on the</span>
              <span className="block text-sm md:text-base font-bold uppercase">GOOGLE PLAY</span>
            </span>
          </a>
        </motion.div>

        <div className="h-40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm md:text-base uppercase tracking-[0.22em] text-gray-400 mb-2">
            Somos parte del grupo
          </p>
          <div className="rounded-[28px] border border-white/10 bg-white/4 p-4 md:p-6 shadow-[0_20px_60px_rgba(3,6,18,0.35)]">
            <img
              src={ilevenBanner}
              alt="ILEVEN GROUP"
              className="w-1/2 h-auto object-contain rounded-2xl mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
