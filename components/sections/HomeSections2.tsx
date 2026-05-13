'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User, Book, MapPin, Calendar } from 'lucide-react';

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

export function FeaturedCoursesSection() {
  const courses = [
    { title: "Qur'an Memorisation", desc: "Structured memorisation and revision with Tajweed.", level: "All Levels", icon: Book },
    { title: "Arabic Language", desc: "Comprehensive Arabic from absolute beginner to advanced.", level: "Beginner - Advanced", icon: Book },
    { title: "Foundational Tawheed", desc: "Learn the core beliefs of a Muslim based on authentic texts.", level: "Beginner", icon: Book },
    { title: "IGCSE Mathematics", desc: "Complete preparation for Edexcel & Cambridge exams.", level: "High School", icon: Book },
    { title: "General Science", desc: "Fascinating science education from an Islamic perspective.", level: "Middle School", icon: Book },
    { title: "Intro to Programming", desc: "Learn logic and coding with Python and web technologies.", level: "Middle & High School", icon: Book },
  ];

  return (
    <section className="py-24 bg-brand-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Start Your Journey Today.</h2>
          <p className="text-brand-text-muted">Explore our most popular courses for students of all ages.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i * 0.1}}>
              <Card className="h-full flex flex-col hover:border-brand-accent/50 group cursor-pointer">
                <CardContent className="p-8 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 text-brand-accent/5 group-hover:text-brand-accent/10 transition-colors">
                    <course.icon className="w-32 h-32" />
                  </div>
                  <div className="mb-4 bg-brand-accent/10 w-12 h-12 rounded-full flex items-center justify-center relative z-10">
                    <course.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 relative z-10">{course.title}</h4>
                  <p className="text-brand-text-muted mb-6 relative z-10 flex-grow">{course.desc}</p>
                  <div className="flex items-center justify-between mt-auto relative z-10">
                    <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">{course.level}</span>
                    <span className="text-sm font-bold text-white group-hover:text-brand-accent transition-colors">Learn More →</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    { text: "Markazul Bayaan transformed my child's understanding of Islam. The teachers are incredibly patient and knowledgeable.", author: "Umm Abdullah", country: "United Kingdom" },
    { text: "As an adult learner, I struggled to find a flexible program. The 1-on-1 Arabic classes here are exactly what I needed.", author: "Tariq R.", country: "United States" },
    { text: "The balance between Islamic and Academic subjects is perfect. It's like having a world-class school at home.", author: "Abu Yusuf", country: "Canada" },
  ];

  return (
    <section className="py-24 bg-brand-primary overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white">Words From Our Families.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <motion.div key={i} initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: i * 0.2}}>
              <Card className="h-full bg-brand-section">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 text-brand-accent fill-brand-accent" />)}
                  </div>
                  <p className="text-brand-text-secondary italic leading-relaxed mb-8">"{test.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold">{test.author}</div>
                      <div className="text-sm text-brand-text-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {test.country}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Marquee */}
      <div className="w-full bg-brand-section/50 border-y border-brand-border py-4 relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-2xl">
          <span className="mx-4 text-brand-text-muted">🇬🇧 United Kingdom</span>
          <span className="mx-4 text-brand-text-muted">🇺🇸 United States</span>
          <span className="mx-4 text-brand-text-muted">🇨🇦 Canada</span>
          <span className="mx-4 text-brand-text-muted">🇦🇺 Australia</span>
          <span className="mx-4 text-brand-text-muted">🇿🇦 South Africa</span>
          <span className="mx-4 text-brand-text-muted">🇸🇦 Saudi Arabia</span>
          <span className="mx-4 text-brand-text-muted">🇦🇪 UAE</span>
          <span className="mx-4 text-brand-text-muted">🇬🇧 United Kingdom</span>
          <span className="mx-4 text-brand-text-muted">🇺🇸 United States</span>
          <span className="mx-4 text-brand-text-muted">🇨🇦 Canada</span>
        </div>
      </div>
    </section>
  );
}

export function TeachersSection() {
  const teachers = [
    { name: "Sh. Ahmad", subject: "Fiqh & Hadith", gender: "Male", bio: "Graduate of Islamic University of Madinah." },
    { name: "Ust. Fatima", subject: "Qur'an & Tajweed", gender: "Female", bio: "Holds multiple Ijaazaat in the ten Qira'aat." },
    { name: "Dr. Omar", subject: "Mathematics", gender: "Male", bio: "PhD in Applied Mathematics, 10+ years experience." },
    { name: "Ust. Aisha", subject: "Arabic Language", gender: "Female", bio: "Native speaker with a Master's in Arabic Linguistics." },
  ];

  return (
    <section className="py-24 bg-brand-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Learn From the Best.</h2>
            <p className="text-brand-text-muted max-w-2xl">Our teachers are highly qualified specialists dedicated to your success.</p>
          </div>
          <Button variant="ghost">Meet All Our Teachers →</Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, i) => (
            <motion.div key={i} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay: i * 0.1}}>
              <Card className="text-center group overflow-hidden bg-brand-primary">
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto rounded-full border-2 border-brand-accent/50 p-1 mb-6 group-hover:border-brand-accent transition-colors">
                    <div className="w-full h-full rounded-full bg-brand-section flex items-center justify-center overflow-hidden">
                      <User className="w-10 h-10 text-brand-text-muted" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{teacher.name}</h4>
                  <div className="text-brand-accent font-medium mb-3">{teacher.subject}</div>
                  <span className="inline-block px-3 py-1 bg-brand-section rounded-full text-xs font-bold text-brand-text-secondary mb-4 border border-brand-border">
                    {teacher.gender} Teacher
                  </span>
                  <p className="text-sm text-brand-text-muted">{teacher.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  const posts = [
    { title: "How to Build a Consistent Qur'an Habit", category: "Islamic Studies", date: "Oct 12, 2024", read: "5 min read" },
    { title: "Balancing Online Learning for Kids", category: "Parenting", date: "Oct 08, 2024", read: "4 min read" },
    { title: "Understanding the Basics of Tajweed", category: "Qur'an", date: "Sep 28, 2024", read: "7 min read" },
  ];

  return (
    <section className="py-24 bg-brand-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">From Our Knowledge Hub.</h2>
            <p className="text-brand-text-muted max-w-2xl">Articles, tips, and insights from our scholars and educators.</p>
          </div>
          <Button variant="ghost">Visit the Knowledge Hub →</Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i * 0.1}}>
              <Card className="h-full bg-brand-section group cursor-pointer hover:border-brand-accent/50 transition-colors">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-xs font-bold text-brand-accent tracking-wider uppercase mb-4">{post.category}</div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors leading-tight">{post.title}</h4>
                  <div className="mt-auto flex items-center justify-between text-sm text-brand-text-muted pt-6 border-t border-brand-border">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
                    <div>{post.read}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
