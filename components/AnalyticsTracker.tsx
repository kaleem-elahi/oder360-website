'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return;

    // Make an API call to track the page visit (using /api/event to bypass basic adblockers)
    fetch('/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path: pathname,
        userAgent: window.navigator.userAgent,
        referrer: document.referrer,
      }),
    }).catch(err => {
      console.error('Failed to track page view:', err)
    })
  }, [pathname])

  return null
}
