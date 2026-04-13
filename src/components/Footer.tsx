import { WA_URL, EMAIL, LINKEDIN} from '../data/contact'

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
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/50 hover:text-bg/90 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
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
