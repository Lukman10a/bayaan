'use client';

import * as React from "react"
import { Link, usePathname } from '@/i18n/routing'
import { Button } from "@/components/ui/button"
import { useTranslations, useLocale } from "next-intl"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('Navbar')
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('about') },
    { href: "/islamic-courses", label: t('islamicCourses') },
    { href: "/academic-courses", label: t('academicCourses') },
    { href: "/teachers", label: t('teachers') },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-brand-primary/90 backdrop-blur-md border-b border-brand-accent/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-brand-accent flex items-center justify-center bg-brand-primary">
              <span className="text-brand-accent font-bold font-heading text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-brand-text font-heading font-bold text-xl block leading-tight">{t('markazulBayaan')}</span>
              <span className="text-brand-accent font-arabic text-sm block leading-tight">{t('markazulBayaanAr')}</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
               <Link key={link.href} href={link.href} className="text-brand-text-secondary hover:text-brand-accent transition-colors text-sm font-medium">
                 {link.label}
               </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <ThemeToggle />
            <div className="hidden sm:flex items-center bg-brand-section rounded-full p-1 border border-brand-border">
               <Link href={pathname} locale="en" className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${locale === 'en' ? 'bg-brand-accent text-brand-primary' : 'text-brand-text-secondary hover:text-brand-accent'}`}>EN</Link>
               <Link href={pathname} locale="ar" className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${locale === 'ar' ? 'bg-brand-accent text-brand-primary' : 'text-brand-text-secondary hover:text-brand-accent'}`}>AR</Link>
            </div>
            <Button className="hidden sm:inline-flex rounded-full">{t('enrolNow')}</Button>
            {/* Mobile menu toggle */}
            <button 
              className="md:hidden text-brand-text-secondary p-2 hover:text-brand-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-brand-section border-b border-brand-border shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-text font-medium block py-2 border-b border-brand-border/50">
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center bg-brand-primary rounded-full p-1 border border-brand-border">
               <Link href={pathname} locale="en" className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${locale === 'en' ? 'bg-brand-accent text-brand-primary' : 'text-brand-text-secondary hover:text-brand-accent'}`}>EN</Link>
               <Link href={pathname} locale="ar" className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${locale === 'ar' ? 'bg-brand-accent text-brand-primary' : 'text-brand-text-secondary hover:text-brand-accent'}`}>AR</Link>
            </div>
            <Button className="flex-1 rounded-full">{t('enrolNow')}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
