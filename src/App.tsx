import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Projects } from './components/Projects'
import { WhyItWorks } from './components/WhyItWorks'
import { CTAFinal } from './components/CTAFinal'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Projects />
        <WhyItWorks />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
