'use client';

import { useTranslations } from 'next-intl';
import { courses } from '@/lib/courseData';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, CheckCircle, Users, User, ArrowRight, MonitorPlay } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { use } from 'react';

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = useTranslations('CourseData');
  // Unwrap params using React.use() as required in Next.js 15+ App Router
  const { slug } = use(params);
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const Icon = course.icon === 'Book' ? Book : MonitorPlay;

  return (
    <main className="flex-1 pt-20 bg-brand-primary min-h-screen">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-accent/20">
         <div className="absolute inset-0 opacity-5 pointer-events-none" />
         <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-brand-accent/10 flex items-center justify-center mb-8 border border-brand-accent/20">
               <Icon className="w-10 h-10 text-brand-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-text mb-6">{t(course.titleKey)}</h1>
            <p className="text-xl text-brand-text-secondary leading-relaxed">{t(course.descKey)}</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-12">
               
               {/* Left Column: Curriculum & Details */}
               <div className="lg:col-span-2 space-y-12">
                  <div>
                     <h2 className="text-3xl font-heading font-bold text-brand-text mb-6">{t('overview')}</h2>
                     <p className="text-brand-text-muted leading-relaxed mb-6">
                        {t(course.descKey)}
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <div className="bg-brand-section px-4 py-2 rounded-lg border border-brand-border text-sm font-medium text-brand-text-secondary">
                           <span className="text-brand-accent mr-2">Levels:</span> {course.levels}
                        </div>
                        <div className="bg-brand-section px-4 py-2 rounded-lg border border-brand-border text-sm font-medium text-brand-text-secondary">
                           <span className="text-brand-accent mr-2">Format:</span> {course.format}
                        </div>
                     </div>
                  </div>

                  {course.stageCount && course.stagesKey && (
                     <div>
                        <h2 className="text-3xl font-heading font-bold text-brand-text mb-6">{t('curriculum')}</h2>
                        <div className="space-y-4">
                           {Array.from({ length: course.stageCount }).map((_, idx) => (
                              <Card key={idx} className="bg-brand-section border-brand-border hover:border-brand-accent transition-colors">
                                 <CardContent className="p-6 flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center border border-brand-accent text-brand-accent font-bold shrink-0">
                                       {idx + 1}
                                    </div>
                                    <div>
                                       <p className="text-brand-text font-medium text-lg">{t(`${course.stagesKey}${idx + 1}`)}</p>
                                    </div>
                                 </CardContent>
                              </Card>
                           ))}
                        </div>
                     </div>
                  )}
               </div>

               {/* Right Column: Pricing & Enrollment */}
               <div className="lg:col-span-1">
                  <div className="sticky top-32 space-y-6">
                     <Card className="bg-brand-section border-brand-border overflow-hidden">
                        <div className="bg-brand-accent text-brand-primary text-center py-2 font-bold uppercase tracking-wider text-sm">
                           {t('pricing')}
                        </div>
                        <CardContent className="p-6">
                           <div className="space-y-6">
                              {/* Private Tuition */}
                              <div className="bg-brand-primary rounded-xl p-5 border border-brand-border">
                                 <div className="flex items-center gap-2 text-brand-accent mb-2">
                                    <User className="w-5 h-5" /> <span className="font-bold text-brand-text">1-on-1 Private</span>
                                 </div>
                                 <div className="text-3xl font-bold text-brand-text">£100<span className="text-base font-normal text-brand-text-muted">/mo</span></div>
                              </div>
                              
                              {/* Group Class */}
                              {course.format.includes('Group') && (
                                 <div className="bg-brand-primary rounded-xl p-5 border border-brand-border">
                                    <div className="flex items-center gap-2 text-brand-accent mb-2">
                                       <Users className="w-5 h-5" /> <span className="font-bold text-brand-text">Group Class</span>
                                    </div>
                                    <div className="text-3xl font-bold text-brand-text">£50<span className="text-base font-normal text-brand-text-muted">/mo</span></div>
                                    <div className="text-sm text-brand-text-muted mt-2">Max 5 students for quality</div>
                                 </div>
                              )}
                           </div>
                           
                           <Link href="/register" className="block mt-8">
                              <Button size="lg" className="w-full group">
                                 {t('enrolNow')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                              </Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  );
}
