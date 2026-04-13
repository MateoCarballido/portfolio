# AGENTS.md — PORTFOLIO MATEO CARBALLIDO

> Copiar este archivo a la raíz de cada proyecto cliente.
> El @import trae todas las skills, convenciones y flujo de trabajo desde Codex pro.

---

@/Users/mateocarballido/Desktop/Codex pro/AGENTS.md

---

## Contexto del Cliente

- **Nombre:** Mateo Carballido
- **Especialidad:** Diseño + desarrollo web para PYMEs
- **Ubicación:** Buenos Aires, Argentina
- **Enfoque:** Sitios que convierten (no solo "bonitos")
- **Tono:** Profesional, accesible, directo
- **Promesa:** "Tu presencia online que vende"

## Propuesta de Valor del Cliente

- **Modelo de negocio:** Done-for-You Portfolio Generator
- **Construcción:** Landing/sitios web antes de visitar al cliente
- **Demo:** En vivo lista para presentar
- **Pago:** Cliente paga solo si decide avanzar
- **Stack:** Profesional, conversión-ready
- **Entrega:** 1-2 semanas

## CTA Principal

- **Email:** teocarballido@gmail.com
- **WhatsApp:** +54 9 11 6629-0707
- **LinkedIn:** https://www.linkedin.com/in/mateo-carballido-639347314/
- **Portfolio:** https://mateocarballido.github.io

## Identidad Visual

- **Paleta:** [Ej: cálida — marrones, cremas, blanco]
- **Tipografía:** [Ej: Playfair Display + Lato]
- **Estilo:** [Ej: artesanal y cercano / moderno y premium / confiable y profesional]

## Información Técnica

- **Deploy URL:** [URL de Vercel cuando esté lista]
- **Stack:** Vite 8 + React 19 + TypeScript 6 + Tailwind CSS 4 + React Router 7
- **UI libs:** Radix UI (`@radix-ui/react-slot`), `class-variance-authority`, `clsx`, `tailwind-merge` → setup tipo shadcn/ui
- **Iconos:** Lucide React 1.7
- **Build:** Rolldown (bundler nuevo, reemplaza Rollup dentro de Vite 8)
- **Estado:** Demo en construcción (dist/ existe — ya fue buildeado al menos una vez)

## Animaciones — Trademark

- Lenis inicializado en `main.tsx` con `autoRaf: true`
- Todas las animaciones de entrada usan Anime.js (no CSS transitions)
- Duración estándar: 600–800ms, easing: `easeOutQuad`
- Scroll reveal: opacity [0→1] + translateY [30→0], stagger de 80ms entre elementos
- Hero: animación de entrada al cargar (no on-scroll)
- Nada de animaciones en mobile si `prefers-reduced-motion` está activo

## Uso de Skills (Obligatorio)

> Las skills están en `/Users/mateocarballido/Desktop/Codex pro/.agents/skills/`

- Al crear o modificar componentes React → usar `building-components` + `emil-design-eng`
- Al diseñar UI nueva o layouts → usar `frontend-design` + `ui-ux-pro-max`
- Al escribir o revisar copy → usar `humanizer`
- Al trabajar con Tailwind, shadcn/ui o sistema de diseño → usar `shadcn-ui`