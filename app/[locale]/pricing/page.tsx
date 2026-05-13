'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="flex-1 pt-20 bg-brand-primary">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">Transparent, Accessible Pricing.</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">Invest in your hereafter and your worldly success.</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <Card className="bg-brand-section flex flex-col">
                  <CardHeader>
                     <CardTitle className="text-white text-2xl text-center">Group Course</CardTitle>
                     <p className="text-brand-text-muted text-center mt-2">Perfect for collaborative learning</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="text-center mb-8">
                        <span className="text-4xl font-bold text-brand-accent">$40</span>
                        <span className="text-brand-text-muted">/month</span>
                     </div>
                     <ul className="space-y-4">
                        {['Maximum 10 students', 'Live interactive sessions', 'Access to recordings', 'Course materials included'].map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-brand-text-secondary">
                              <Check className="w-5 h-5 text-brand-accent" /> {feature}
                           </li>
                        ))}
                     </ul>
                  </CardContent>
                  <CardFooter>
                     <Button className="w-full">Select Plan</Button>
                  </CardFooter>
               </Card>

               <Card className="bg-brand-primary border-brand-accent transform md:-translate-y-4 shadow-[0_0_30px_rgba(201,151,42,0.15)] flex flex-col relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-primary font-bold px-4 py-1 rounded-full text-sm">MOST POPULAR</div>
                  <CardHeader>
                     <CardTitle className="text-white text-2xl text-center">1-on-1 Tuition</CardTitle>
                     <p className="text-brand-text-muted text-center mt-2">Personalised attention and pace</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="text-center mb-8">
                        <span className="text-4xl font-bold text-brand-accent">$120</span>
                        <span className="text-brand-text-muted">/month</span>
                     </div>
                     <ul className="space-y-4">
                        {['Dedicated tutor', 'Flexible scheduling', 'Customised curriculum pace', 'Weekly progress reports', 'Direct tutor access'].map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-brand-text-secondary">
                              <Check className="w-5 h-5 text-brand-accent" /> {feature}
                           </li>
                        ))}
                     </ul>
                  </CardContent>
                  <CardFooter>
                     <Button className="w-full">Select Plan</Button>
                  </CardFooter>
               </Card>

               <Card className="bg-brand-section flex flex-col">
                  <CardHeader>
                     <CardTitle className="text-white text-2xl text-center">Full Bundle</CardTitle>
                     <p className="text-brand-text-muted text-center mt-2">Complete homeschool solution</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="text-center mb-8">
                        <span className="text-4xl font-bold text-brand-accent">$250</span>
                        <span className="text-brand-text-muted">/month</span>
                     </div>
                     <ul className="space-y-4">
                        {['All core Islamic subjects', 'Maths & Science included', 'Dedicated academic advisor', 'Sibling discounts apply'].map((feature, i) => (
                           <li key={i} className="flex items-center gap-3 text-brand-text-secondary">
                              <Check className="w-5 h-5 text-brand-accent" /> {feature}
                           </li>
                        ))}
                     </ul>
                  </CardContent>
                  <CardFooter>
                     <Button className="w-full">Select Plan</Button>
                  </CardFooter>
               </Card>
            </div>
         </div>
      </section>
    </main>
  );
}
