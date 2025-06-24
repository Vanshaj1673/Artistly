import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Book Your Next Artist?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Join thousands of event planners who trust Artistly to find the perfect performers for their events. 
                Get started in minutes and discover amazing talent today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="secondary" size="lg" className="group">
                  <Link href="/artists">
                    Browse Artists
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <Link href="/onboarding">
                    <Users className="mr-2 h-4 w-4" />
                    Join as Artist
                  </Link>
                </Button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm">
                <Users className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}