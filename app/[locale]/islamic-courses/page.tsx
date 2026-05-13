'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, CheckCircle, ArrowRight, Users, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { courses } from '@/lib/courseData';
import { Link } from '@/i18n/routing';

export default function IslamicCoursesPage() {
  const t = useTranslations('IslamicCoursesPage');
  const tCourse = useTranslations('CourseData');
  
  const islamicCourses = courses.filter(c => c.type === 'islamic');

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
               {islamicCourses.map((course, i) => (
                  <Card key={i} className="bg-brand-section flex flex-col h-full border-t-2 border-t-brand-primary hover:border-t-brand-accent transition-colors">
                     <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                              <Book className="w-6 h-6 text-brand-accent" />
                           </div>
                           <h3 className="text-2xl font-bold text-brand-text">{tCourse(course.titleKey)}</h3>
                        </div>
                        <p className="text-brand-text-muted mb-8">{tCourse(course.descKey)}</p>
                        
                        <div className="mb-8 flex-grow">
                           <h4 className="text-brand-accent font-bold mb-3 uppercase text-sm tracking-wider">{t('stages')}</h4>
                           <ul className="space-y-3">
                              {Array.from({ length: course.stageCount || 0 }).map((_, idx) => (
                                 <li key={idx} className="flex items-start gap-3 text-brand-text-secondary text-sm">
                                    <CheckCircle className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" /> 
                                    <span>{tCourse(`${course.stagesKey}${idx + 1}`)}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <div className="bg-brand-primary rounded-xl p-6 border border-brand-border mb-8">
                           <h4 className="text-brand-text font-bold mb-4">{t('tuition')}</h4>
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <div className="flex items-center gap-2 text-brand-accent mb-1">
                                    <User className="w-4 h-4" /> <span className="font-bold text-sm">{t('private')}</span>
                                 </div>
                                 <div className="text-2xl font-bold text-brand-text">£100<span className="text-sm font-normal text-brand-text-muted">{t('mo')}</span></div>
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 text-brand-accent mb-1">
                                    <Users className="w-4 h-4" /> <span className="font-bold text-sm">{t('group')}</span>
                                 </div>
                                 <div className="text-2xl font-bold text-brand-text">£50<span className="text-sm font-normal text-brand-text-muted">{t('mo')}</span></div>
                                 <div className="text-xs text-brand-text-muted mt-1">{t('maxStudents')}</div>
                              </div>
                           </div>
                        </div>

                        <Link href={`/courses/${course.slug}`} className="mt-auto">
                          <Button className="w-full justify-between group">
                             {tCourse('viewDetails')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                          </Button>
                        </Link>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
