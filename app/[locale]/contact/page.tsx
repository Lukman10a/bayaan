'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <main className="flex-1 pt-20 bg-brand-primary min-h-screen">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">{t('heroSubtitle')}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
               <div className="lg:col-span-1 space-y-6">
                  <Card className="bg-brand-section border-brand-border text-center">
                     <CardContent className="p-8">
                        <MessageCircle className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-white mb-2">{t('whatsapp')}</h4>
                        <p className="text-brand-text-muted mb-4">+44 123 456 7890</p>
                        <Button variant="ghost" size="sm" className="w-full">{t('msg')}</Button>
                     </CardContent>
                  </Card>
                  <Card className="bg-brand-section border-brand-border text-center">
                     <CardContent className="p-8">
                        <Mail className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-white mb-2">{t('email')}</h4>
                        <p className="text-brand-text-muted mb-4">info@markazulbayaan.com</p>
                        <Button variant="ghost" size="sm" className="w-full">{t('sendEmail')}</Button>
                     </CardContent>
                  </Card>
               </div>
               
               <div className="lg:col-span-2">
                  <Card className="bg-brand-section border-brand-border">
                     <CardContent className="p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-white mb-8">{t('sendMsg')}</h2>
                        <form className="space-y-6">
                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-sm font-bold text-brand-text-secondary">{t('name')}</label>
                                 <input type="text" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-sm font-bold text-brand-text-secondary">{t('email')}</label>
                                 <input type="email" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" />
                              </div>
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-brand-text-secondary">{t('subject')}</label>
                              <input type="text" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-brand-text-secondary">{t('message')}</label>
                              <textarea className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-brand-accent transition-colors"></textarea>
                           </div>
                           <Button type="button" size="lg">{t('submit')}</Button>
                           <p className="text-xs text-brand-text-muted mt-4">{t('promise')}</p>
                        </form>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
