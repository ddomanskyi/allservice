'use client'

import { useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import * as amplitude from '@amplitude/analytics-browser'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import Plans from '@/components/Plans'
import Form from '@/components/Form'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY)

export default function Home() {
  useEffect(() => {
    const identifyObj = new amplitude.Identify()

    let deviceId = localStorage.getItem('device_id')
      
    if (!deviceId) {
      deviceId = uuid()
      localStorage.setItem('device_id', deviceId)
    }

    identifyObj.set('device_id', deviceId)
    amplitude.identify(identifyObj)
    amplitude.track('Landing page viewed!');
  }, [])

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
