import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import Plans from '@/components/Plans'
import Form from '@/components/Form'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <OurServices />
        <Plans />
        <Form />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
