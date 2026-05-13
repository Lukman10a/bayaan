'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MonitorPlay, CheckCircle, ArrowRight } from 'lucide-react';

export default function AcademicCoursesPage() {
  const courses = [
    { title: "IGCSE Mathematics", desc: "Complete preparation for Edexcel & Cambridge exams.", levels: "High School", format: "Group & 1-on-1" },
    { title: "General Sciences", desc: "Physics, Chemistry, and Biology taught with excellence.", levels: "Middle & High School", format: "Group & 1-on-1" },
    { title: "Programming Foundations", desc: "Python, web development, and logic building.", levels: "Middle & High School", format: "Group" },
  ];

  return (
    <main className="flex-1 pt-20 bg-brand-primary">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-accent/20">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">World-Class Academics.</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto mb-8">Globally recognised standards, preparing students for the future.</p>
            <Button size="lg">Explore Academic Courses</Button>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {courses.map((course, i) => (
                  <Card key={i} className="bg-brand-section flex flex-col h-full border-t-2 border-t-brand-primary hover:border-t-brand-accent transition-colors">
                     <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                              <MonitorPlay className="w-6 h-6 text-brand-accent" />
                           </div>
                           <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                        </div>
                        <p className="text-brand-text-muted mb-8 flex-grow">{course.desc}</p>
                        <div className="space-y-3 mb-8 text-sm">
                           <div className="flex items-center gap-2 text-brand-text-secondary"><CheckCircle className="w-4 h-4 text-brand-accent"/> Levels: {course.levels}</div>
                           <div className="flex items-center gap-2 text-brand-text-secondary"><CheckCircle className="w-4 h-4 text-brand-accent"/> Format: {course.format}</div>
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
