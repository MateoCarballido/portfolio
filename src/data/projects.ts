export interface Project {
  id: string
  label: string        // "Tipo de cliente · Ubicación"
  name: string
  problem: string
  solution: string
  result: string
  link?: string
  gradient: string     // Tailwind gradient classes for visual placeholder
  accentColor: string  // Tailwind text color class for the label
  videoId?: string     // YouTube video ID for hover preview
}

export const projects: Project[] = [
  {
    id: 'trademark',
    label: 'Comunicación visual en puntos de venta, diseño gráfico y branding',
    name: 'Trademark Brandcare',
    problem: 'Presencia online desactualizada que no transmitía el nivel creativo del estudio.',
    solution: 'Landing page editorial con portfolio de proyectos, enfoque en identidad visual y conversión.',
    result: 'Web lista en 10 días. Punto de contacto profesional listo para nuevos clientes.',
    link: 'https://mateocarballido.github.io',
    gradient: 'from-[oklch(62%_0.13_48)] to-[oklch(45%_0.10_35)]',
    accentColor: 'text-accent',
    videoId: 'y5dfrGatgoU',
  },
  {
    id: 'vera-studio',
    label: 'Centro de bellez y estética',
    name: 'Vera Studio',
    problem: 'Único canal de contacto era Instagram, limitando la captación de nuevos clientes y profesionalismo.',
    solution: 'Sitio web moderno y responsive con catálogo de servicios, formulario de contacto y Google Maps.',
    result: 'Primeras consultas orgánicas en la segunda semana.',
    gradient: 'from-[oklch(25%_0.01_260)] to-[oklch(40%_0.02_260)]',
    accentColor: 'text-accent',
    videoId: 'WXVHmFzBlgg',
  },
]
