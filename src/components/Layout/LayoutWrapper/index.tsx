'use client'

import Header from "../Header"
import Footer from "../Footer"
import { usePathname } from 'next/navigation'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()

  const pathsWithoutFooter = ['/recipe', '/pricing', '/contact'];
  const shouldShowFooter = !pathsWithoutFooter.includes(pathname);

  return (
    <>
      <Header />
      {children}
      {shouldShowFooter && <Footer />}
    </>
  )
}