import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Socials from '@/components/sections/Socials'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Socials />
    </main>
  )
}
