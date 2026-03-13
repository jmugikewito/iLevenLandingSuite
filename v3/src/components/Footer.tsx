import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../images/elevate_banner.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[260px] bg-[#304FFE]/20 blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#inicio" className="inline-flex items-center group mb-6">
              <img
                src={logo}
                alt="Ileven Group"
                className="h-7 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Suite de soluciones empresariales para digitalizar y automatizar todos tus procesos en una sola plataforma.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/ileven-group" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/ileven.group/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/people/Ileven-Group/61586820368090/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Soluciones</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Recursos Humanos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Finanzas y Gastos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Inventarios y Logística</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Gestión Operativa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Seguridad y Accesos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Alfonso Ugarte #651, Chiclayo</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-indigo-400 flex-shrink-0" />
                <span>+51 924 824 523</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-indigo-400 flex-shrink-0" />
                <span>ilevenmedia@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} ELEVATE Suite de Soluciones. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Términos</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
