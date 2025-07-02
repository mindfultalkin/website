import React from 'react';
import { Navigation } from '@/components/navigation';
import TermsOfService from '@/components/terms-of-service/terms-of-service';
// import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <div className="container mx-auto px-4 py-16">
                <TermsOfService />
            </div>

            {/* <TestimonialsSection /> */}
            <Footer />
        </main>
    );
}
