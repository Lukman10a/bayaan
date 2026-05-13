'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  return (
    <main className="flex-1 pt-20 bg-brand-primary min-h-screen">
      <section className="py-24 relative overflow-hidden bg-brand-section border-b border-brand-border">
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">Begin Your Journey.</h1>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">Register for a course or a full programme today.</p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-brand-section border-brand-border">
               <CardContent className="p-8 md:p-12">
                  <form className="space-y-8">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-brand-text-secondary">First Name</label>
                           <input type="text" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="e.g. Abdullah" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-brand-text-secondary">Last Name</label>
                           <input type="text" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="e.g. Ahmad" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text-secondary">Email Address</label>
                        <input type="email" className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="you@example.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text-secondary">Select Course / Programme</label>
                        <select className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors">
                           <option>Select an option...</option>
                           <option>Full Islamic Programme</option>
                           <option>Full Academic Programme</option>
                           <option>Individual Course - Qur'an</option>
                           <option>Individual Course - Arabic</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text-secondary">Additional Notes</label>
                        <textarea className="w-full bg-brand-primary border border-brand-border rounded-lg px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-brand-accent transition-colors" placeholder="Any specific requirements or timezone preferences?"></textarea>
                     </div>
                     <Button type="button" size="lg" className="w-full">Submit Registration</Button>
                  </form>
               </CardContent>
            </Card>
         </div>
      </section>
    </main>
  );
}
