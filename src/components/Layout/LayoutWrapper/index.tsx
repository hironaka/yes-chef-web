'use client'

import Header from "../Header"
import Footer from "../Footer"
import { usePathname } from 'next/navigation'

export default function NavigationWrapper() {
  const pathname = usePathname()
  const hideHeaderOn = ['/recipe']
  const shouldHideHeader = hideHeaderOn.includes(pathname)

  return (
    <>
      {!shouldHideHeader && <Header />}
      {!shouldHideHeader && <Footer />}
    </>
  )
}