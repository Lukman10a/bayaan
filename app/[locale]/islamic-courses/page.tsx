'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, CheckCircle, ArrowRight, Users, User } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function IslamicCoursesPage() {
  const t = useTranslations('IslamicCoursesPage');
  const courses = [
    {
      title: "Arabic Language (اللغة العربية)",
      desc: "Comprehensive Arabic from absolute beginner to advanced.",
      stages: [
        "Level 1: Qaaidah Nooraaniyyah (Foundations of Reading)",
        "Level 2: Madinah Book 1 (Basic Grammar & Vocabulary)",
        "Level 3: Madinah Books 2 & 3 (Intermediate to Advanced Syntax)"
      ]
    },
    {
      title: "Qur'an (القرآن الكريم)",
      desc: "Structured memorisation and recitation with precise Tajweed.",
      stages: [
        "Level 1: Correct Recitation & Basic Tajweed Rules",
        "Level 2: Intermediate Memorisation (Juz Amma & Tabarak)",
        "Level 3: Advanced Memorisation & Ijaazah Track"
      ]
    },
    {
      title: "Tawhid (التوحيد)",
      desc: "Learn the core beliefs of a Muslim based on authentic texts.",
      stages: [
        "Level 1: Nawaaqid al-Islam & Al-Qawaa'id Al-Arba'",
        "Level 2: Usool Ath-Thalatha (The Three Fundamental Principles)",
        "Level 3: Kitab At-Tawhid (Advanced Monotheism)"
      ]
    },
    {
      title: "Fiqh (الفقه)",
      desc: "Islamic jurisprudence and the rulings of worship.",
      stages: [
        "Level 1: Fiqh of Purification & Prayer",
        "Level 2: Umdatul Ahkam (Rulings derived from Hadith)",
        "Level 3: Zaad Al-Mustaqni' (Advanced Jurisprudence)"
      ]
    },
    {
      title: "Hadith (الحديث)",
      desc: "The sayings, actions, and approvals of the Prophet ﷺ.",
      stages: [
        "Level 1: 40 Hadith an-Nawawi",
        "Level 2: Umdatul Ahkam",
        "Level 3: Bulugh Al-Maram"
      ]
    },
    {
      title: "Tafsir (التفسير)",
      desc: "Exegesis and profound meanings of the Qur'an.",
      stages: [
        "Level 1: Tafsir of Juz Amma (Tafsir As-Sa'di)",
        "Level 2: Tafsir of Selected Surahs (Al-Baqarah, Al-Kahf)",
        "Level 3: Advanced Tafsir Principles (Usool At-Tafsir)"
      ]
    }
  ];

  return (
    <main className="flex-1 pt-20 bg-brand-primary">
      <section className="py-24 relative overflow-hidden bg-brand-green/20 border-b border-brand-accent/20">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-accent mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto mb-8">{t('heroSubtitle')}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
               {courses.map((course, i) => (
                  <Card key={i} className="bg-brand-section flex flex-col h-full border-t-2 border-t-brand-primary hover:border-t-brand-accent transition-colors">
                     <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                              <Book className="w-6 h-6 text-brand-accent" />
                           </div>
                           <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                        </div>
                        <p className="text-brand-text-muted mb-8">{course.desc}</p>
                        
                        <div className="mb-8 flex-grow">
                           <h4 className="text-brand-accent font-bold mb-3 uppercase text-sm tracking-wider">{t('stages')}</h4>
                           <ul className="space-y-3">
                              {course.stages.map((stage, idx) => (
                                 <li key={idx} className="flex items-start gap-3 text-brand-text-secondary text-sm">
                                    <CheckCircle className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" /> 
                                    <span>{stage}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <div className="bg-brand-primary rounded-xl p-6 border border-brand-border mb-8">
                           <h4 className="text-white font-bold mb-4">{t('tuition')}</h4>
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <div className="flex items-center gap-2 text-brand-accent mb-1">
                                    <User className="w-4 h-4" /> <span className="font-bold text-sm">{t('private')}</span>
                                 </div>
                                 <div className="text-2xl font-bold text-white">£100<span className="text-sm font-normal text-brand-text-muted">{t('mo')}</span></div>
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 text-brand-accent mb-1">
                                    <Users className="w-4 h-4" /> <span className="font-bold text-sm">{t('group')}</span>
                                 </div>
                                 <div className="text-2xl font-bold text-white">£50<span className="text-sm font-normal text-brand-text-muted">{t('mo')}</span></div>
                                 <div className="text-xs text-brand-text-muted mt-1">{t('maxStudents')}</div>
                              </div>
                           </div>
                        </div>

                        <Button className="w-full justify-between group mt-auto">
                           {t('enrol')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                        </Button>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
