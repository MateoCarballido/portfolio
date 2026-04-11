# Portfolio Mateo Carballido — Design Spec
**Date:** 2026-04-09  
**Status:** Approved

---

## Overview

Portfolio personal de Mateo Carballido — no es un portfolio común, es una herramienta de ventas. El objetivo es convertir visitantes en clientes potenciales con un CTA directo a WhatsApp.

**Mensaje central:** "Hago tu web antes de que me pagues" — diferenciador real, va primero.

---

## Stack

- **Framework:** Vite 8 + React 19 + TypeScript (strict)
- **Estilos:** Tailwind CSS 4 (config en `tailwind.config.ts`)
- **Router:** React Router 7 (single-page con hash routes o simple scroll)
- **Animaciones:** Lenis (scroll suave, init en `main.tsx`) + Anime.js (entrances)
- **Fuentes:** Google Fonts — DM Serif Display + Plus Jakarta Sans

---

## Diseño Visual

### Paleta
```
--color-bg:        oklch(97% 0.01 85)      /* crema cálido */
--color-bg-alt:    oklch(93% 0.015 80)     /* crema más oscuro para secciones alt */
--color-text:      oklch(18% 0.01 260)     /* carbón profundo */
--color-text-muted:oklch(52% 0.01 260)     /* texto secundario */
--color-accent:    oklch(62% 0.13 48)      /* terracota/ocre muted */
--color-accent-light: oklch(90% 0.06 65)   /* fondo accent suave */
```

### Tipografía
- **Display:** DM Serif Display — headlines grandes, inclinadas con `font-style: italic` selectivo
- **Body:** Plus Jakarta Sans — pesos 400, 500, 600
- **Escala:** fluid con `clamp()`, base 16px → 18px en desktop

### Layout
- Contenedor máximo: `max-w-6xl` (1152px), padding horizontal fluido
- Asimétrico: secciones que rompen el grid conscientemente
- Mucho whitespace — secciones con `py-24` a `py-32`
- Mobile-first. No ocultar funcionalidad en mobile.

### Animaciones
- Lenis: `autoRaf: true`, init en main.tsx
- Anime.js: stagger `opacity [0→1] + translateY [24→0]`, duración 700ms, easing `easeOutQuad`
- Hero: animación al cargar (no on-scroll)
- Scroll reveals: IntersectionObserver → trigger Anime.js
- `prefers-reduced-motion`: desactivar todas las animaciones

---

## Estructura de Páginas

Single page. Un solo `index` con secciones ancladas. Sin routing multi-página.

---

## Secciones

### 1. Navbar
- Logo/nombre: "Mateo Carballido" en Plus Jakarta Sans 600
- Links: Proyectos | Cómo trabajo | Contacto (scroll suave)
- CTA botón: "Ver mi trabajo" → scroll a proyectos
- Mobile: hamburger → drawer overlay

### 2. Hero
**Objetivo:** Impacto en 3 segundos. Claro qué hace y para quién.

- **Headline grande (DM Serif Display italic, ~80–100px desktop):**  
  _"Tu web, lista antes de que hables conmigo."_
- **Subheadline:**  
  _"Diseño y desarrollo sitios para negocios reales. Ves el resultado antes de pagar un peso."_
- **CTA primario:** Botón grande → WhatsApp (`https://wa.me/5491166290707`)  
  Texto: "Quiero ver cómo quedaría mi web →"
- **Visual:** Layout asimétrico. Headline toma 60% del ancho. A la derecha, un elemento gráfico compuesto de tipografía grande con el año y un rect de acento. Sin mockup de pantalla (genérico).
- **Animación:** Stagger al cargar — headline primero, luego subheadline, luego CTA.

### 3. Cómo Funciona (3 pasos)
**Objetivo:** Eliminar fricción. El proceso es simple e inteligente.

Layout: 3 columnas en desktop, stack en mobile. Números grandes como elemento decorativo.

1. **Encuentro tu negocio** — Busco empresas locales que necesitan presencia online.
2. **Hago tu web gratis** — Antes de hablar con vos, ya tengo una demo lista.
3. **Mostramos, decidís** — Si te gusta lo que ves, avanzamos. Si no, sin cargo.

Copy de cierre: _"Sin contratos raros. Sin riesgos. Solo resultados."_

### 4. Proyectos (Case Studies)
**Objetivo:** Demostrar capacidad real. No es galería — es evidencia.

3 case studies en layout tipo editorial (alternando left/right en desktop):

**Estructura de cada card:**
- Etiqueta tipo cliente (ej: "Panadería artesanal · CABA")
- Nombre del proyecto
- Problema en una línea
- Solución en una línea
- Resultado esperado / métricas si existen
- Link "Ver proyecto →" (puede ir a demo o imagen)
- Screenshot grande del diseño

**Proyectos placeholder** (reemplazables):
1. Trademark — Agencia creativa (proyecto de práctica)
2. Panadería ejemplo — Negocio local sin web
3. Estudio contable — Profesional independiente

### 5. Por qué funciona (Beneficios)
Layout asimétrico. No card-grid repetitivo.

4 puntos, con el primero en grande (featured) y los otros 3 en secundario:
- **[Featured]** Ves antes de comprometerte — Cero riesgo para el cliente
- Velocidad real — De concepto a demo en 1 semana
- Diseño con intención — Cada elemento tiene un por qué
- Enfoque en ventas — No hacemos "lindas". Hacemos que conviertan.

### 6. CTA Final
Sección de fondo `--color-accent-light`, centrada.

- **Headline:** _"¿Cómo se vería la web de tu negocio?"_
- **Sub:** _"Mandame un mensaje y en 48hs tenés una demo real. Sin compromiso."_
- **Botón grande:** "Hablar por WhatsApp →" → `https://wa.me/5491166290707`
- **Texto chico debajo:** teocarballido@gmail.com

### 7. Footer
Minimalista. Una línea.

- Izquierda: "Mateo Carballido © 2026"
- Centro: LinkedIn | Portfolio (mateocarballido.github.io)
- Derecha: WhatsApp | Email

---

## Estructura de Archivos

```
portfolioTeo/
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
├── src/
│   ├── main.tsx              ← Lenis init aquí
│   ├── App.tsx               ← Layout + secciones
│   ├── index.css             ← CSS custom properties, fuentes, base styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── WhyItWorks.tsx
│   │   ├── CTAFinal.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollReveal.ts  ← IntersectionObserver + Anime.js
│   └── data/
│       └── projects.ts         ← Data de proyectos
```

---

## Copy Final (aprobado)

| Sección | Copy |
|---------|------|
| Hero headline | "Tu web, lista antes de que hables conmigo." |
| Hero sub | "Diseño y desarrollo sitios para negocios reales. Ves el resultado antes de pagar un peso." |
| CTA hero | "Quiero ver cómo quedaría mi web →" |
| Paso 1 | "Encuentro tu negocio" |
| Paso 2 | "Hago tu web gratis" |
| Paso 3 | "Mostramos, decidís" |
| Cierre método | "Sin contratos raros. Sin riesgos. Solo resultados." |
| CTA final headline | "¿Cómo se vería la web de tu negocio?" |
| CTA final sub | "Mandame un mensaje y en 48hs tenés una demo real. Sin compromiso." |
| CTA final botón | "Hablar por WhatsApp →" |

---

## Decisiones Clave

1. **Single page, no router multi-página** — portfolio de conversión, no SPA compleja
2. **Light theme** — diferenciación vs el dark/neon genérico de AI
3. **DM Serif Display italic** — carácter editorial, memorable, no Inter
4. **WhatsApp como CTA principal** — fricción mínima, canal real de conversión
5. **Case studies, no galería** — evidencia de capacidad, no decoración
6. **Sin mockups de pantalla genéricos** — tipografía y composición como visual hero
