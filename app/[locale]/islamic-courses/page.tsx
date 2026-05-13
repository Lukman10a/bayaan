'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, CheckCircle, ArrowRight } from 'lucide-react';

export default function IslamicCoursesPage() {
  const courses = [
    { title: "Qur'an Memorisation", desc: "Structured memorisation with Tajweed.", levels: "Beginner to Advanced", age: "5+ years" },
    { title: "Arabic Language", desc: "Madinah Books & Al-Arabiyyah Bayna Yadayk.", levels: "Absolute Beginner to Advanced", age: "7+ years" },
    { title: "Aqeedah & Tawheed", desc: "Study classical texts like Usool Ath-Thalatha.", levels: "Beginner to Advanced", age: "12+ years" },
    { title: "Fiqh & Hadith", desc: "Umdatul Ahkam and foundational jurisprudence.", levels: "Intermediate", age: "12+ years" },
  ];

  return (
    <main className="flex-1 pt-20 bg-brand-primary">
      <section className="py-24 relative overflow-hidden bg-brand-green/20 border-b border-brand-accent/20">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-accent mb-6">Authentic Islamic Education.</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto mb-8">Rooted in classical scholarship, structured for the modern learner.</p>
            <Button size="lg">Enrol in Islamic Courses</Button>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
               <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Curriculum Source</h2>
               <p className="text-brand-text-muted leading-relaxed">
                  All our Islamic curriculums are sourced directly from recognized institutions in Saudi Arabia. We ensure that every text taught is authentic, and every teacher is thoroughly vetted and qualified to teach their respective subjects.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {courses.map((course, i) => (
                  <Card key={i} className="bg-brand-section flex flex-col h-full border-t-2 border-t-brand-primary hover:border-t-brand-accent transition-colors">
                     <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                              <Book className="w-6 h-6 text-brand-accent" />
                           </div>
                           <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                        </div>
                        <p className="text-brand-text-muted mb-8 flex-grow">{course.desc}</p>
                        <div className="space-y-3 mb-8 text-sm">
                           <div className="flex items-center gap-2 text-brand-text-secondary"><CheckCircle className="w-4 h-4 text-brand-accent"/> Levels: {course.levels}</div>
                           <div className="flex items-center gap-2 text-brand-text-secondary"><CheckCircle className="w-4 h-4 text-brand-accent"/> Ages: {course.age}</div>
                        </div>
                        <Button className="w-full justify-between group">
                           Enrol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
