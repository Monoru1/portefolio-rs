'use client'

import { useEffect } from 'react'

export function AutoScroll() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.55,
        behavior: 'smooth',
      })
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return null
}
