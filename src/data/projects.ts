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
}

export const projects: Project[] = [
  {
    id: 'trademark',
    label: 'Agencia creativa · CABA',
    name: 'Trademark Studio',
    problem: 'Presencia online desactualizada que no transmitía el nivel creativo del estudio.',
    solution: 'Landing page editorial con portfolio de proyectos, enfoque en identidad visual y conversión.',
    result: 'Web lista en 10 días. Punto de contacto profesional listo para nuevos clientes.',
    link: 'https://mateocarballido.github.io',
    gradient: 'from-[oklch(62%_0.13_48)] to-[oklch(45%_0.10_35)]',
    accentColor: 'text-accent',
  },
  {
    id: 'panaderia',
    label: 'Negocio local · Palermo',
    name: 'La Miga',
    problem: 'Panadería artesanal sin presencia online. Clientes nuevos llegaban solo por recomendación.',
    solution: 'Sitio minimalista con menú, ubicación y WhatsApp directo. Carga en menos de 2 segundos.',
    result: 'Canal de contacto nuevo activo desde el primer día.',
    gradient: 'from-[oklch(85%_0.06_85)] to-[oklch(70%_0.08_75)]',
    accentColor: 'text-text-muted',
  },
  {
    id: 'contador',
    label: 'Profesional independiente · CABA',
    name: 'Estudio Bernal',
    problem: 'Contador con 15 años de trayectoria sin web. Perdía clientes frente a competidores con mejor presencia.',
    solution: 'Sitio de confianza: servicios claros, bio profesional, formulario de contacto y Google Maps.',
    result: 'Primeras consultas orgánicas en la segunda semana.',
    gradient: 'from-[oklch(25%_0.01_260)] to-[oklch(40%_0.02_260)]',
    accentColor: 'text-accent',
  },
]
