// app/privacy/page.tsx
import { Navigation } from "@/components/navigation";
import RefundAndCancellationPolicy from "@/components/refund-and-cancellation-policy/refund-and-cancellation-policy";
// import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <RefundAndCancellationPolicy />
      </div>

      {/* <TestimonialsSection /> */}
      <Footer />
    </main>
  );
}
