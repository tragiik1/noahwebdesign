import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import FAQ from '@/components/sections/FAQ'
import Socials from '@/components/sections/Socials'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <main id="main-content" className="overflow-hidden" role="main" tabIndex={-1}>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <FAQ />
        <Socials />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

