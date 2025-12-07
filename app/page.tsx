import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import Socials from '@/components/sections/Socials'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Socials />
      <Testimonials />
      <Contact />
    </main>
  )
}

