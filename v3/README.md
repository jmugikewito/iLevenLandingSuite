# ILEVEN GROUP SAC - Landing V3

Landing corporativa de **ILEVEN GROUP SAC** para presentar la suite empresarial **ELEVATE**.

Esta versión (`v3`) está construida con React + TypeScript + Vite y contiene una experiencia one-page enfocada en:

- Posicionamiento comercial de la suite.
- Presentación de beneficios, módulos y casos de uso.
- Prueba social con testimonios.
- Resolución de dudas frecuentes.
- Conversión a demo y descarga de apps.

## Sobre la empresa

**ILEVEN GROUP SAC** es una empresa orientada a la transformación digital empresarial mediante soluciones modulares que permiten automatizar procesos operativos, administrativos y de gestión.

En esta landing, la propuesta de valor se comunica bajo la suite **ELEVATE**, con énfasis en eficiencia, control, seguridad y escalabilidad.

## Contenido actual de la landing

La landing está compuesta por las siguientes secciones (en este orden):

1. `Navbar`
- Navegación principal con acceso a: Inicio, Beneficios, Productos, Casos de uso y Testimonios.
- Botón de acción: "Solicita una demo".
- Logo SVG oficial desde `src/images/elevate_banner.svg`.

2. `Hero`
- Mensaje principal: digitalización y automatización de procesos en una sola plataforma.
- CTA primario y CTA de video demo.
- Mockup visual tipo dashboard.

3. `Benefits`
- Bloque de beneficios clave:
  - Automatiza todo.
  - Escala a tu ritmo.
  - Más control y seguridad.

4. `Products`
- Catálogo de módulos de la suite ELEVATE en formato cards:
  - QUEST, EVE, BUZ, BUD, DGA, EMAT, GOP, INV, CVI, DOC.

5. `TechStack`
- Nuevo apartado de **stack tecnológico** en formato carrusel horizontal con cards.
- Incluye ícono, título y descripción de tecnologías utilizadas.

6. `UseCases`
- Casos de uso por industria:
  - Empresas de servicios, Industria, Retail y Recursos Humanos.

7. `Steps`
- Flujo de 3 pasos para iniciar la transformación digital:
  - Agenda demo, personaliza suite, activa y transforma.

8. `Testimonials`
- Testimonios de clientes en cards.

9. `FAQ`
- Preguntas frecuentes sobre adopción e implementación.

10. `CTA`
- Sección final de conversión.
- Botón principal para demo.
- Botones de descarga con assets reales:
  - `src/images/appstore.svg`
  - `src/images/playstore.svg`

11. `Footer`
- Logo SVG oficial.
- Redes sociales:
  - LinkedIn: https://linkedin.com/company/ileven-group
  - Instagram: https://instagram.com/ileven.group/
  - Facebook: https://facebook.com/people/Ileven-Group/61586820368090/
- Información de contacto:
  - Dirección: Alfonso Ugarte #651, Chiclayo
  - Teléfono: +51 924 824 523
  - Correo: ilevenmedia@gmail.com

## Estructura del proyecto

```txt
v3/
  src/
    components/
      Navbar.tsx
      Hero.tsx
      Benefits.tsx
      Products.tsx
      TechStack.tsx
      UseCases.tsx
      Steps.tsx
      Testimonials.tsx
      FAQ.tsx
      CTA.tsx
      Footer.tsx
    images/
      elevate_banner.svg
      appstore.svg
      playstore.svg
    App.tsx
    main.tsx
    index.css
```

## Stack técnico

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (animaciones)
- Lucide React (iconografía)

## Ejecución local

### Requisitos

- Node.js 18+

### Comandos

```bash
npm install
npm run dev
```

La aplicación se ejecuta por defecto en:

- `http://localhost:3000`

### Build de producción

```bash
npm run build
npm run preview
```

## Notas

- Este proyecto es una landing frontend. No requiere base de datos para su funcionamiento visual.
- Los enlaces de App Store y Google Play en `CTA` están listos para conectar a URLs oficiales cuando estén disponibles.
