'use client';

import { useTranslations } from 'next-intl';

export default function GalleryPage() {
  const t = useTranslations('GalleryPage');
  return (
    <main className="flex-1 pt-20 bg-brand-primary min-h-screen">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">{t('heroSubtitle')}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4 text-center">
            <p className="text-brand-text-muted mb-8">{t('placeholder')}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
               <div className="bg-brand-section rounded-lg border border-brand-border row-span-2"></div>
               <div className="bg-brand-section rounded-lg border border-brand-border"></div>
               <div className="bg-brand-section rounded-lg border border-brand-border row-span-2 col-span-1 md:col-span-2 lg:col-span-1"></div>
               <div className="bg-brand-section rounded-lg border border-brand-border"></div>
               <div className="bg-brand-section rounded-lg border border-brand-border"></div>
               <div className="bg-brand-section rounded-lg border border-brand-border"></div>
            </div>
         </div>
      </section>
    </main>
  );
}
