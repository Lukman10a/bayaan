'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Shield, Award, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  
  return (
    <main className="flex-1 pt-20 bg-brand-primary">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="absolute inset-0 opacity-5 pointer-events-none" />
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">{t('heroSubtitle')}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-20 text-center">
               <blockquote className="text-3xl font-heading font-medium text-brand-accent leading-relaxed italic border-y border-brand-border py-12">
                  {t('quote')}
               </blockquote>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
               <div>
                  <h2 className="text-3xl font-heading font-bold text-white mb-6">{t('legacyTitle')}</h2>
                  <p className="text-brand-text-muted leading-relaxed mb-6">
                     {t('legacyP1')}
                  </p>
                  <p className="text-brand-text-muted leading-relaxed">
                     {t('legacyP2')}
                  </p>
               </div>
               <div className="aspect-[4/3] bg-brand-section rounded-2xl border border-brand-accent/20 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-brand-accent/30" />
               </div>
            </div>

            <div className="mb-24">
               <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">{t('valuesTitle')}</h2>
               <div className="grid md:grid-cols-3 gap-6">
                  {[
                     { icon: Shield, title: t('v1Title'), desc: t('v1Desc') },
                     { icon: Award, title: t('v2Title'), desc: t('v2Desc') },
                     { icon: Heart, title: t('v3Title'), desc: t('v3Desc') }
                  ].map((val, i) => (
                     <Card key={i} className="bg-brand-section">
                        <CardContent className="p-8 text-center">
                           <val.icon className="w-12 h-12 text-brand-accent mx-auto mb-6" />
                           <h4 className="text-xl font-bold text-white mb-3">{val.title}</h4>
                           <p className="text-brand-text-muted">{val.desc}</p>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
