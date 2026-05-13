'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Globe, Users, BookOpen, Star, ArrowRight, Shield, Clock, MonitorPlay, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function HeroSection() {
  const t = useTranslations('HomePage');
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (heroTextRef.current) {
      const text = heroTextRef.current;
      const words = text.innerText.split(' ');
      text.innerHTML = '';
      words.forEach((word) => {
        const span = document.createElement('span');
        span.innerText = word + ' ';
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        if (word.includes('Purpose.') || word.includes('الغاية.')) {
           span.className = 'text-brand-accent italic';
        }
        text.appendChild(span);
      });

      gsap.to(text.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: "power2.out",
        delay: 0.2
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-primary">
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-section border border-brand-border mb-6">
              <Globe className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Online Islamic School — Worldwide</span>
            </motion.div>
            
            <h1 ref={heroTextRef} className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {t('title')}
            </h1>
            
            <motion.p variants={fadeInVariant} className="text-lg md:text-xl text-brand-text-secondary leading-relaxed mb-10 max-w-2xl">
              {t('subtitle')}
            </motion.p>
            
            <motion.div variants={fadeInVariant} className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="gap-2">Enrol Now <ArrowRight className="w-5 h-5" /></Button>
              <Button size="lg" variant="ghost">Explore Our Courses</Button>
            </motion.div>
            
            <motion.div variants={fadeInVariant} className="flex flex-wrap gap-6 items-center text-sm font-medium text-brand-text-muted">
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-accent"/> All Ages Welcome</div>
              <div className="w-1 h-1 rounded-full bg-brand-border hidden sm:block"/>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-accent"/> Male & Female Teachers</div>
              <div className="w-1 h-1 rounded-full bg-brand-border hidden sm:block"/>
              <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-brand-accent"/> Students Worldwide</div>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="hidden lg:block relative h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-96 h-96 rounded-full border border-brand-accent/30 flex items-center justify-center relative shadow-[0_0_50px_rgba(201,151,42,0.1)]">
                  <div className="absolute inset-4 rounded-full border border-brand-accent/20 animate-[spin_60s_linear_infinite]" />
                  <BookOpen className="w-32 h-32 text-brand-accent opacity-80" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,110.2,192.39,100.8,236.4,94.23,279.7,80.9,321.39,56.44Z" fill="#0E1E38"></path>
        </svg>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="bg-brand-section py-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-border">
          {[
            { label: 'Students Enrolled', value: '500+' },
            { label: 'Islamic Subjects', value: '9+' },
            { label: 'Academic Subjects', value: '3' },
            { label: 'Qualified Teachers', value: '20+' }
          ].map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-heading font-bold text-brand-accent mb-2">{stat.value}</div>
              <div className="text-sm text-white font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-brand-primary">
       <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={staggerContainer}>
                <motion.h2 variants={fadeInVariant} className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                   More Than a School — <br/>A Community of Knowledge.
                </motion.h2>
                <motion.div variants={fadeInVariant} className="pl-6 border-l-2 border-brand-accent mb-6">
                   <p className="text-lg text-brand-text-secondary leading-relaxed">
                      At Markazul Bayaan, we believe that education is a lifelong journey. We provide a structured, authentic Islamic curriculum alongside world-class academic subjects, ensuring a comprehensive education for every student.
                   </p>
                </motion.div>
                <motion.p variants={fadeInVariant} className="text-brand-text-muted mb-6 leading-relaxed">
                   Whether you are a beginner taking your first steps in Arabic, or an advanced student of knowledge studying classical texts, our expert teachers are here to guide you.
                </motion.p>
                <motion.div variants={fadeInVariant}>
                   <Button variant="link" className="px-0 text-brand-accent text-lg">Learn More About Us →</Button>
                </motion.div>
             </motion.div>

             <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.8}} className="relative">
                <div className="aspect-[4/3] rounded-2xl border border-brand-accent/20 bg-brand-section overflow-hidden relative group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-section to-brand-primary opacity-80" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-24 h-24 text-brand-accent opacity-50" />
                   </div>
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-accent" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-accent" />
             </motion.div>
          </div>
       </div>
    </section>
  );
}

export function ProgrammesSection() {
  return (
    <section className="py-24 bg-brand-section">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={staggerContainer} className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4">Our Programmes</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">A Complete Education for the Whole Person.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
             <Card className="h-full bg-brand-green/20 border-brand-accent/30 overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-green/30 to-transparent opacity-50" />
               <CardContent className="p-10 relative z-10 flex flex-col h-full">
                 <div className="mb-6"><BookOpen className="w-12 h-12 text-brand-accent" /></div>
                 <h3 className="text-3xl font-heading font-bold text-brand-accent mb-4">Islamic Programme</h3>
                 <p className="text-white text-lg mb-8 italic">Rooted in authentic scholarship. Delivered with clarity.</p>
                 <div className="flex flex-wrap gap-2 mb-10">
                   {['Qur\'an', 'Arabic', 'Hadith', 'Tawheed', 'Fiqh', 'Seerah', 'Mutoon'].map(subject => (
                     <span key={subject} className="px-3 py-1 bg-black/30 rounded-full text-sm text-brand-text-secondary">{subject}</span>
                   ))}
                 </div>
                 <div className="mt-auto">
                   <Button variant="link" className="text-brand-accent px-0 hover:text-brand-amber">Explore Islamic Courses →</Button>
                 </div>
               </CardContent>
             </Card>
          </motion.div>

          <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
             <Card className="h-full bg-brand-primary border-brand-accent/20 overflow-hidden relative group">
               <CardContent className="p-10 relative z-10 flex flex-col h-full">
                 <div className="mb-6"><MonitorPlay className="w-12 h-12 text-brand-accent" /></div>
                 <h3 className="text-3xl font-heading font-bold text-brand-accent mb-4">Academic Programme</h3>
                 <p className="text-white text-lg mb-8 italic">World-class curricula. Future-ready skills.</p>
                 <div className="flex flex-wrap gap-2 mb-10">
                   {['Mathematics', 'Sciences', 'Programming'].map(subject => (
                     <span key={subject} className="px-3 py-1 bg-white/5 rounded-full text-sm text-brand-text-secondary">{subject}</span>
                   ))}
                 </div>
                 <div className="mt-auto">
                   <Button variant="link" className="text-brand-accent px-0 hover:text-brand-amber">Explore Academic Courses →</Button>
                 </div>
               </CardContent>
             </Card>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.4}}>
          <Card className="bg-brand-primary/50 border-brand-accent/20">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-bold text-white mb-2">Rawdatul Atfaal</h4>
                  <p className="text-brand-text-muted">A dedicated wing for our youngest learners (ages 4-8).</p>
                </div>
              </div>
              <Button asChild variant="ghost">
                <a href="https://rawdahkids.org" target="_blank" rel="noreferrer">Visit Rawdatul Atfaal →</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    { icon: Shield, title: "Authentic Scholarship", desc: "Curriculum sourced from Saudi Arabian Islamic institutions." },
    { icon: Users, title: "All Ages Welcome", desc: "From 4-year-olds to adult learners — no one is turned away." },
    { icon: Users, title: "Gender-Appropriate", desc: "Male teachers for males, female teachers for females." },
    { icon: Clock, title: "Flexible Scheduling", desc: "Classes built around your timezone and availability." },
    { icon: Users, title: "Small Class Sizes", desc: "Maximum 10 students per group class to ensure quality." },
    { icon: Globe, title: "Global Community", desc: "Students from across the world learning together." }
  ];

  return (
    <section className="py-24 bg-brand-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white">Why Families Choose Us.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i * 0.1}}>
              <Card className="h-full border-t-2 border-t-brand-primary hover:border-t-brand-accent transition-all duration-300">
                <CardContent className="p-8">
                  <feature.icon className="w-10 h-10 text-brand-accent mb-6" />
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-brand-text-muted">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-primary border-t border-brand-border">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-green/20 opacity-30 mix-blend-overlay" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Begin Your Journey With Us Today.</h2>
        <p className="text-xl text-brand-text-secondary mb-10">Join thousands of students worldwide in the pursuit of authentic knowledge.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Enrol Now →</Button>
          <Button size="lg" variant="ghost">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
