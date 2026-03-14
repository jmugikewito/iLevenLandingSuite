export const siteConfig = {
  brand: 'ELEVATE Suite',
  company: 'ILEVEN GROUP SAC',
  siteUrl: 'https://www.ileven.group/elevate',
  contact: {
    phoneE164: '51924824523',
    phoneDisplay: '+51 924 824 523',
    email: 'ilevenmedia@gmail.com',
    address: 'Alfonso Ugarte #651, Chiclayo',
  },
  social: {
    linkedin: 'https://linkedin.com/company/ileven-group',
    instagram: 'https://instagram.com/ileven.group/',
    facebook: 'https://facebook.com/people/Ileven-Group/61586820368090/',
  },
} as const;

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.phoneE164}?text=${encoded}`;
}
