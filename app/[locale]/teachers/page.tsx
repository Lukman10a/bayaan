'use client';

import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TeachersPage() {
  const t = useTranslations('TeachersPage');
  const teachers = [
    { name: "Sh. Ahmad", subject: "Fiqh & Hadith", gender: "Male", bio: "Graduate of Islamic University of Madinah." },
    { name: "Ust. Fatima", subject: "Qur'an & Tajweed", gender: "Female", bio: "Holds multiple Ijaazaat in the ten Qira'aat." },
    { name: "Dr. Omar", subject: "Mathematics", gender: "Male", bio: "PhD in Applied Mathematics, 10+ years experience." },
    { name: "Ust. Aisha", subject: "Arabic Language", gender: "Female", bio: "Native speaker with a Master's in Arabic Linguistics." },
    { name: "Sh. Bilal", subject: "Aqeedah", gender: "Male", bio: "Graduate of Umm Al-Qura University." },
    { name: "Ust. Khadijah", subject: "General Sciences", gender: "Female", bio: "MSc in Biology, certified science educator." },
  ];

  return (
    <main className="flex-1 pt-20 bg-brand-primary">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-accent/20">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-brand-text mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">{t('heroSubtitle')}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {teachers.map((teacher, i) => (
                  <Card key={i} className="text-center group overflow-hidden bg-brand-section">
                     <CardContent className="p-8">
                        <div className="w-32 h-32 mx-auto rounded-full border-2 border-brand-accent/50 p-1 mb-6 group-hover:border-brand-accent transition-colors">
                           <div className="w-full h-full rounded-full bg-brand-primary flex items-center justify-center overflow-hidden">
                              <User className="w-16 h-16 text-brand-text-muted" />
                           </div>
                        </div>
                        <h4 className="text-2xl font-bold text-brand-text mb-2">{teacher.name}</h4>
                        <div className="text-brand-accent font-medium mb-4">{teacher.subject}</div>
                        <span className="inline-block px-4 py-1 bg-brand-primary rounded-full text-xs font-bold text-brand-text-secondary mb-6 border border-brand-border">
                           {teacher.gender === 'Male' ? t('maleTeacher') : t('femaleTeacher')}
                        </span>
                        <p className="text-brand-text-muted">{teacher.bio}</p>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
