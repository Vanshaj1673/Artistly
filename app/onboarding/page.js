'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OnboardingForm from '@/components/onboarding/OnboardingForm';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/50">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Join as an Artist
              </h1>
              <p className="text-lg text-muted-foreground">
                Create your profile and start receiving booking requests from event planners
              </p>
            </div>
            <OnboardingForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
