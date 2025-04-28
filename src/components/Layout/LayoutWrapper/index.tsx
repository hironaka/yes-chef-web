'use client'

import Header from "../Header"
import Footer from "../Footer"
import { usePathname } from 'next/navigation'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()

  const pathsWithFooter = ['/'];
  const shouldShowFooter = pathsWithFooter.includes(pathname);

  return (
    <>
      <Header />
      {children}
      {shouldShowFooter && <Footer />}
    </>
  )
}