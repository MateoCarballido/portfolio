import { useEffect, useRef } from 'react'
import anime from 'animejs'

interface ScrollRevealOptions {
  threshold?: number
  translateY?: number
  duration?: number
  stagger?: number
}

/**
 * Attaches an IntersectionObserver to a container element.
 * When the container enters the viewport, triggers a staggered
 * Anime.js entrance on its direct children (opacity + translateY).
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>()
 *   return <div ref={ref}><Child /><Child /></div>
 *
 * Runs once then observer disconnects. Respects prefers-reduced-motion.
 */
export function useScrollReveal<T extends HTMLElement>(
  options?: ScrollRevealOptions
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const {
      threshold = 0.15,
      translateY = 30,
      duration = 700,
      stagger = 80,
    } = options ?? {}

    const children = Array.from(el.children) as HTMLElement[]
    anime.set(children, { opacity: 0, translateY })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: children,
              opacity: [0, 1],
              translateY: [translateY, 0],
              duration,
              delay: anime.stagger(stagger),
              easing: 'easeOutQuad',
            })
            observer.disconnect()
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}
