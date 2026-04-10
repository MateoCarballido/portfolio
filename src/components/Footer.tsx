const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-text py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-sm">

          <p className="text-bg/50">
            Mateo Carballido © {YEAR}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/mateo-carballido-639347314/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://mateocarballido.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              Portfolio
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5491166290707"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:teocarballido@gmail.com"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
