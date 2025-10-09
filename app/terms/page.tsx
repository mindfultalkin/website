import React from 'react';
import { Navigation } from '@/components/navigation';
import TermsOfUse from '@/components/terms-of-use/terms-of-use';
// import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <div className="container mx-auto px-4 py-16">
                <TermsOfUse/>
            </div>

            {/* <TestimonialsSection /> */}
            <Footer />
        </main>
    );
}
