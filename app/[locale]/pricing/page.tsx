'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PricingPage() {
  const t = useTranslations('PricingPage');
  return (
    <main className="flex-1 pt-20 bg-brand-primary">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">{t('heroSubtitle')}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <Card className="bg-brand-section flex flex-col">
                  <CardHeader>
                     <CardTitle className="text-brand-text text-2xl text-center">{t('group')}</CardTitle>
                     <p className="text-brand-text-muted text-center mt-2">{t('groupDesc')}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="text-center mb-8">
                        <span className="text-4xl font-bold text-brand-accent">£50</span>
                        <span className="text-brand-text-muted">{t('mo')}</span>
                     </div>
                     <ul className="space-y-4">
                        {[t('groupFeatures.f1'), t('groupFeatures.f2'), t('groupFeatures.f3'), t('groupFeatures.f4')].map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-brand-text-secondary">
                              <Check className="w-5 h-5 text-brand-accent" /> {feature}
                           </li>
                        ))}
                     </ul>
                  </CardContent>
                  <CardFooter>
                     <Button className="w-full">{t('select')}</Button>
                  </CardFooter>
               </Card>

               <Card className="bg-brand-primary border-brand-accent transform md:-translate-y-4 shadow-[0_0_30px_rgba(201,151,42,0.15)] flex flex-col relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-primary font-bold px-4 py-1 rounded-full text-sm">{t('popular')}</div>
                  <CardHeader>
                     <CardTitle className="text-brand-text text-2xl text-center">{t('private')}</CardTitle>
                     <p className="text-brand-text-muted text-center mt-2">{t('privateDesc')}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="text-center mb-8">
                        <span className="text-4xl font-bold text-brand-accent">£100</span>
                        <span className="text-brand-text-muted">{t('mo')}</span>
                     </div>
                     <ul className="space-y-4">
                        {[t('privateFeatures.f1'), t('privateFeatures.f2'), t('privateFeatures.f3'), t('privateFeatures.f4'), t('privateFeatures.f5')].map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-brand-text-secondary">
                              <Check className="w-5 h-5 text-brand-accent" /> {feature}
                           </li>
                        ))}
                     </ul>
                  </CardContent>
                  <CardFooter>
                     <Button className="w-full">{t('select')}</Button>
                  </CardFooter>
               </Card>

               <Card className="bg-brand-section flex flex-col">
                  <CardHeader>
                     <CardTitle className="text-brand-text text-2xl text-center">{t('bundle')}</CardTitle>
                     <p className="text-brand-text-muted text-center mt-2">{t('bundleDesc')}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="text-center mb-8">
                        <span className="text-4xl font-bold text-brand-accent">£250</span>
                        <span className="text-brand-text-muted">{t('mo')}</span>
                     </div>
                     <ul className="space-y-4">
                        {[t('bundleFeatures.f1'), t('bundleFeatures.f2'), t('bundleFeatures.f3'), t('bundleFeatures.f4')].map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-brand-text-secondary">
                              <Check className="w-5 h-5 text-brand-accent" /> {feature}
                           </li>
                        ))}
                     </ul>
                  </CardContent>
                  <CardFooter>
                     <Button className="w-full">{t('select')}</Button>
                  </CardFooter>
               </Card>
            </div>
         </div>
      </section>
    </main>
  );
}
