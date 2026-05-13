'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function RegisterPage() {
  const t = useTranslations('RegisterPage');
  return (
    <main className="flex-1 pt-20 bg-brand-primary min-h-screen">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">{t('heroSubtitle')}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-brand-section border-brand-border">
               <CardContent className="p-8 md:p-12">
                  <form className="space-y-8">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-brand-text-secondary">{t('firstName')}</label>
                           <input type="text" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-brand-text-secondary">{t('lastName')}</label>
                           <input type="text" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text-secondary">{t('email')}</label>
                        <input type="email" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="you@example.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text-secondary">{t('select')}</label>
                        <select className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors">
                           <option>{t('option1')}</option>
                           <option>{t('option2')}</option>
                           <option>{t('option3')}</option>
                           <option>{t('option4')}</option>
                           <option>{t('option5')}</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text-secondary">{t('notes')}</label>
                        <textarea className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-brand-accent transition-colors" placeholder={t('notesPlaceholder')}></textarea>
                     </div>
                     <Button type="button" size="lg" className="w-full">{t('submit')}</Button>
                  </form>
               </CardContent>
            </Card>
         </div>
      </section>
    </main>
  );
}
