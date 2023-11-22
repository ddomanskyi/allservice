'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import * as amplitude from '@amplitude/analytics-browser'

export default function Services() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    router.push('/#services')
    
    if (searchParams.get('source') === 'flyer') {
      console.log('searchParams', searchParams.get('source'));
      amplitude.track('Navigated from the flyer!');
    }
  }, [])

  return (
    <>
    </>
  )
}
