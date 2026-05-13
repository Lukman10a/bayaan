'use client';

import * as React from "react"
import { Link, usePathname } from '@/i18n/routing'
import { Button } from "@/components/ui/button"
import { useLocale } from "next-intl"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const locale = useLocale()
  const pathname = usePathname()
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-primary/90 backdrop-blur-md border-b border-brand-accent/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-brand-accent flex items-center justify-center bg-brand-primary">
              <span className="text-brand-accent font-bold font-heading text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-heading font-bold text-xl block leading-tight">Markazul Bayaan</span>
              <span className="text-brand-accent font-arabic text-sm block leading-tight">مركز البيان</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-brand-text-secondary hover:text-brand-accent transition-colors text-sm font-medium">Home</Link>
            <Link href="/about" className="text-brand-text-secondary hover:text-brand-accent transition-colors text-sm font-medium">About</Link>
            <Link href="/islamic-courses" className="text-brand-text-secondary hover:text-brand-accent transition-colors text-sm font-medium">Islamic Courses</Link>
            <Link href="/academic-courses" className="text-brand-text-secondary hover:text-brand-accent transition-colors text-sm font-medium">Academic Courses</Link>
            <Link href="/teachers" className="text-brand-text-secondary hover:text-brand-accent transition-colors text-sm font-medium">Teachers</Link>
          </nav>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="hidden sm:flex items-center bg-brand-section rounded-full p-1 border border-brand-border">
               <Link href={pathname} locale="en" className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${locale === 'en' ? 'bg-brand-accent text-brand-primary' : 'text-brand-text-secondary hover:text-brand-accent'}`}>EN</Link>
               <Link href={pathname} locale="ar" className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${locale === 'ar' ? 'bg-brand-accent text-brand-primary' : 'text-brand-text-secondary hover:text-brand-accent'}`}>AR</Link>
            </div>
            <Button className="hidden sm:inline-flex rounded-full">Enrol Now →</Button>
            {/* Mobile menu button */}
            <button className="md:hidden text-brand-text-secondary p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
