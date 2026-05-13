'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    { title: "How to Build a Consistent Qur'an Habit", category: "Islamic Studies", date: "Oct 12, 2024", read: "5 min read" },
    { title: "Balancing Online Learning for Kids", category: "Parenting", date: "Oct 08, 2024", read: "4 min read" },
    { title: "Understanding the Basics of Tajweed", category: "Qur'an", date: "Sep 28, 2024", read: "7 min read" },
    { title: "The Importance of Studying Seerah", category: "Islamic Studies", date: "Sep 15, 2024", read: "6 min read" },
    { title: "Tips for Effective Online Mathematics Study", category: "Academic Tips", date: "Sep 02, 2024", read: "4 min read" },
    { title: "Welcome to Our New School Year", category: "School News", date: "Aug 20, 2024", read: "3 min read" },
  ];

  return (
    <main className="flex-1 pt-20 bg-brand-primary min-h-screen">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">Knowledge Worth Sharing.</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">Insights, tips, and news from Markazul Bayaan.</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {posts.map((post, i) => (
                  <Card key={i} className="h-full bg-brand-section group cursor-pointer hover:border-brand-accent/50 transition-colors">
                     <CardContent className="p-8 flex flex-col h-full">
                        <div className="text-xs font-bold text-brand-accent tracking-wider uppercase mb-4">{post.category}</div>
                        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors leading-tight">{post.title}</h4>
                        <div className="mt-auto flex items-center justify-between text-sm text-brand-text-muted pt-6 border-t border-brand-border">
                           <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
                           <div>{post.read}</div>
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
