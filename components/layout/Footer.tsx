import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')
  const navT = useTranslations('Navbar')

  return (
    <footer className="bg-brand-section pt-20 pb-10 border-t border-brand-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-brand-accent flex items-center justify-center bg-brand-primary">
                <span className="text-brand-accent font-bold font-heading text-xl">M</span>
              </div>
              <div>
                <span className="text-brand-text font-heading font-bold text-2xl block leading-tight">{navT('markazulBayaan')}</span>
                <span className="text-brand-accent font-arabic text-md block leading-tight">{navT('markazulBayaanAr')}</span>
              </div>
            </Link>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
              {t('desc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-text-secondary hover:text-brand-accent transition-colors border border-brand-border">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-text-secondary hover:text-brand-accent transition-colors border border-brand-border">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-text font-heading font-semibold text-lg mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('home')}</Link></li>
              <li><Link href="/about" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('aboutUs')}</Link></li>
              <li><Link href="/gallery" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('gallery')}</Link></li>
              <li><Link href="/blog" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('knowledgeHub')}</Link></li>
              <li><Link href="/contact" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-heading font-semibold text-lg mb-6">{t('programmes')}</h4>
            <ul className="space-y-3">
              <li><Link href="/islamic-courses" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('islamicCourses')}</Link></li>
              <li><Link href="/academic-courses" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('academicCourses')}</Link></li>
              <li><a href="https://rawdahkids.org" target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-brand-accent transition-colors flex items-center gap-2">{t('rawdatulAtfaal')} <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></li>
              <li><Link href="/teachers" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('ourTeachers')}</Link></li>
              <li><Link href="/pricing" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('pricing')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-heading font-semibold text-lg mb-6">{t('getStarted')}</h4>
            <p className="text-brand-text-muted text-sm mb-4">{t('joinCommunity')}</p>
            <Button className="w-full justify-center mb-4">{t('enrolNow')}</Button>
            <Button variant="ghost" className="w-full justify-center">{t('contactAdmissions')}</Button>
          </div>
        </div>
        
        <div className="border-t border-brand-border py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-text-muted text-sm">
            &copy; {new Date().getFullYear()} {t('rights')}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse text-sm">
            <Link href="/privacy" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="text-brand-text-muted hover:text-brand-accent transition-colors">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
