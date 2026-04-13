import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

function sendYTCommand(iframe: HTMLIFrameElement, func: string) {
  iframe.contentWindow?.postMessage(
    JSON.stringify({ event: 'command', func, args: [] }),
    '*'
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [hasStartedVideo, setHasStartedVideo] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateInputMode = () => {
      const touchMode = !mediaQuery.matches
      setIsTouchDevice(touchMode)
      setHasStartedVideo((current) => (touchMode ? current : true))
    }

    updateInputMode()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateInputMode)
      return () => mediaQuery.removeEventListener('change', updateInputMode)
    }

    mediaQuery.addListener(updateInputMode)
    return () => mediaQuery.removeListener(updateInputMode)
  }, [])

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setHasStartedVideo(true)
      if (iframeRef.current) sendYTCommand(iframeRef.current, 'playVideo')
    }
  }

  const handleIframeLoad = () => {
    if (hasStartedVideo && iframeRef.current) {
      sendYTCommand(iframeRef.current, 'playVideo')
    }
  }

  const handlePlayTap = () => {
    setHasStartedVideo(true)
  }
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

      {/* Visual — order swaps on even/odd rows on desktop */}
      <div
        className={`relative h-64 lg:h-auto min-h-[320px] ${
          !isEven ? 'lg:order-2' : ''
        } overflow-hidden`}
        onMouseEnter={handleMouseEnter}
      >
        {project.videoId ? (
          <>
            {/* Gradient fallback underneath */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            />
            {hasStartedVideo ? (
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&controls=1&loop=1&mute=1&playsinline=1&enablejsapi=1&playlist=${project.videoId}&rel=0&modestbranding=1&disablekb=0&iv_load_policy=3`}
                title={`Preview de ${project.name}`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                loading="lazy"
                onLoad={handleIframeLoad}
                className="absolute inset-0 h-full w-full"
                style={{ border: 'none' }}
              />
            ) : (
              <button
                type="button"
                onClick={handlePlayTap}
                aria-label={`Reproducir video de ${project.name}`}
                className="absolute inset-0 z-[1] flex h-full w-full items-center justify-center"
              >
                <img
                  src={`https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg`}
                  alt={`Vista previa de ${project.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/35 transition-opacity duration-300" />
                <span className="relative flex h-18 w-18 items-center justify-center rounded-full bg-red-600 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-transform duration-300">
                  <span
                    aria-hidden="true"
                    className="ml-1 block h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-white"
                  />
                </span>
              </button>
            )}
          </>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-end p-8`}
          >
            <span
              className="font-display italic text-white/15 leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              aria-hidden="true"
            >
              {project.name}
            </span>
          </div>
        )}

        {project.videoId && (
          <span
            className="absolute bottom-6 left-8 font-display italic text-white/20 leading-none select-none pointer-events-none z-10"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            aria-hidden="true"
          >
            {project.name}
          </span>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto: ${project.name}`}
            className="absolute top-6 right-6 font-sans text-xs text-white/60 hover:text-white transition-colors tracking-widest uppercase z-10"
          >
            Ver proyecto ↗
          </a>
        )}
      </div>

      {/* Content */}
      <div className={`bg-bg p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
        <p className={`font-sans font-semibold text-xs tracking-[0.2em] uppercase mb-4 ${project.accentColor}`}>
          {project.label}
        </p>

        <h3 className="font-display italic text-text text-3xl lg:text-4xl mb-8">
          {project.name}
        </h3>

        <div className="space-y-5">
          <div>
            <p className="font-sans font-semibold text-text-muted text-xs tracking-widest uppercase mb-1.5">
              Problema
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="font-sans font-semibold text-text-muted text-xs tracking-widest uppercase mb-1.5">
              Solución
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div>
            <p className="font-sans font-semibold text-accent text-xs tracking-widest uppercase mb-1.5">
              Resultado
            </p>
            <p className="font-sans text-text font-medium leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </div>

    </article>
  )
}
