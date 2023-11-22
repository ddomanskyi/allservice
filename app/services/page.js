'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { trackEvent } from "@/lib/analytics"

export default function Services() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    router.push('/#services')
    
    if (searchParams.get('source') === 'flyer') {
      trackEvent('Navigated from the flyer!');
    }
  }, [])

  return (
    <>
    </>
  )
}
